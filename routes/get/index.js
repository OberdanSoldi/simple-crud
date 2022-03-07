const query = require('../../db');

module.exports = async (req, res) => {
	try {
		const sql = `SELECT * FROM crud`;
		const results = await query(sql);
		if (results.length > 0) {
			res.status(200).json({
				message: 'Success',
				status: '200',
				data: results
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
};
