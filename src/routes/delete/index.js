import express from 'express';
import query from '../../db';

const router = express.Router();

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const sql = `DELETE FROM crud WHERE id = ${id}`;
		const results = await query(sql);

		if (results.affectedRows > 0) {
			res.status(200).json({
				message: 'Success',
				status: '200'
			});
		} else {
			res.status(404).json({
				message: 'Not found',
				status: '404'
			});
		}
	} catch (e) {
		res.status(500).json({
			message: 'Internal server error',
			status: '500'
		});
		console.error(e);
	}
});

export default router;
