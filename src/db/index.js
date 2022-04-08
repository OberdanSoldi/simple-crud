import mysql from 'serverless-mysql';

require('dotenv').config();

const conn = mysql({
	config: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		port: process.env.DB_PORT,
		password: process.env.DB_PASS,
		database: process.env.DB_DB,
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
