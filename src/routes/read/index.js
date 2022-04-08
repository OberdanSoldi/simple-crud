import express from 'express';
import query from '../../db';
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const sql = `SELECT * FROM crud`;
		const results = await query(sql);
		res.status(200).json({
			message: 'Success',
			status: '200',
			data: results
		});
	} catch (e) {
		res.status(500).json({
			message: 'Internal server error',
			status: '500'
		});
		console.error(e);
	}
})

export default router;
