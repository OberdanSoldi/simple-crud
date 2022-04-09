import mysql from 'serverless-mysql';

const conn = mysql({
	config: {
		host: 'localhost',
		user: 'root',
		port: 3306,
		password: '',
		database: 'crud',
		charset: 'utf8mb4_unicode_ci'
	}
});

export default async function query(q, values) {
	try {
		const results = await conn.query(q, values);
		await conn.end();
		return results;
	} catch (e) {
		throw Error(e.message);
	}
}
