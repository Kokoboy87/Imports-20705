const express = require('express')
const {Pool} = require('pg')
const app = express()

const pool = new Pool({
	user: 'imports-20705-admin',
	host: 'your-host',
	database: 'products',
	password: 'VFwU9ZABBlQHggzq32cADA',
	port: 26257
})

app.get('/api/products/olive-oil', (req, res) => {
	pool.query('SELECT * FROM olive_oil', (err, result) => {
		if (err) {
			console.log(err)
		} else {
			res.json(result.rows)
		}
	})
})

app.listen(3001, () => {
	console.log('Server listening on port 3001')
})
