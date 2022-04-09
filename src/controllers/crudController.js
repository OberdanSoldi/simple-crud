import query from '../db/index.js';

const create = ('/', async (req, res) => {
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

const read = ('/', async (req, res) => {
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
});

const deleteRoute = ('/:id', async (req, res) => {
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

const patch = ('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { name, lastname, ddd, phone } = req.body;

		const sql = `UPDATE crud SET name = '${name}', lastname = '${lastname}', ddd = '${ddd}', phone = '${phone}' WHERE id = ${id}`;
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
})

export {
    create,
    read,
	deleteRoute,
	patch
}