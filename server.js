//const express = require('express')
//const {Pool} = require('pg')
//const app = express()

//const pool = new Pool({
//	user: 'imports-20705-admin',
//	host: 'your-host',
//	database: 'products',
//	password: 'VFwU9ZABBlQHggzq32cADA',
//	port: 26257
//})

//app.get('/api/products/olive-oil', (req, res) => {
//	pool.query('SELECT * FROM olive_oil', (err, result) => {
//		if (err) {
//			console.log(err)
//		} else {
//			res.json(result.rows)
//		}
//	})
//})

//app.listen(3001, () => {
//	console.log('Server listening on port 3001')
//})

// ====== trying to get it to work =====//
require('dotenv').config()
const express = require('express')
const {Pool} = require('pg')
const path = require('path')

const app = express()
const port = process.env.PORT || 5000

// Database connection
const pool = new Pool({
	connectionString: process.env.DATABASE_URL
})

// Add this new route
app.get('/api/products/olive-oil', async (req, res) => {
	try {
		// Replace this with actual database query
		const result = await pool.query('SELECT * FROM products WHERE category = $1', ['olive-oil'])
		res.json(result.rows)
	} catch (err) {
		console.error(err)
		res.status(500).json({error: 'An error occurred while fetching olive oil products'})
	}
})

// Your existing routes and middleware here...

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
