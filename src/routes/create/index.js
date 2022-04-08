import express from 'express';
import query from '../../db/index.js';

const router = express.Router();

router.post('/', async (req, res) => {
	const { name, lastname, ddd, phone } = req.body;

	const dddlen = ddd.toString().length;
	const phonelen = phone.toString().length;
	if (dddlen <= 3 && phonelen <= 9) {
		try {
			const sql = `INSERT INTO crud (name, lastname, ddd, phone) VALUES ('${name}', '${lastname}', '${ddd}', '${phone}')`;
			results = await query(sql);
			res.status(200).json({
				message: 'Success',
				status: '200'
			});
		} catch (e) {
			if (e.message.includes('ER_DUP_ENTRY')) {
				res.status(400).json({
					message: 'Duplicated entry',
					status: '400'
				});
			} else {
				res.status(500).json({
					message: 'Internal server error',
					status: '500'
				});
			}
			console.error(e);
		}
	} else {
		res.status(400).json({
			message: 'Invalid data',
			status: '400'
		});
	}
});

export default router;

// {
// 	"name": "name",
// 	"lastname": "lastname",
// 	"ddd": 12,
// 	"phone": 123456789
// }
