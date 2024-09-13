import React, {useState, useEffect} from 'react'
import ProductList from './ProductList'
import axios from 'axios'

const fetchProducts = async () => {
	try {
		const response = await axios.get('/api/products/olive-oil')
		return response.data
	} catch (error) {
		console.error('Error fetching products:', error)
		throw error
	}
}

export default function OliveOil() {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetchProducts()
			.then((data) => {
				setProducts(data)
				setLoading(false)
			})
			.catch((err) => {
				setError('Failed to fetch products.')
				setLoading(false)
			})
	}, [])

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>{error}</div>
	}

	if (products.length === 0) {
		return <div>No products available</div>
	}

	return (
		<div>
			<h1>Olive Oil Products</h1>
			<ProductList products={products} />
		</div>
	)
}
