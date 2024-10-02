import React, { useState, useEffect } from 'react'
import ProductCard from '../components/product/ProductCard' // Import the reusable product card component
import axios from 'axios'

export default function OliveOil() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get('/api/products/olive-oil') // Fetch from your API
				setProducts(response.data)
			} catch (error) {
				console.error('Error fetching olive oil products', error)
			}
		}

		fetchProducts()
	}, [])

	return (
		<div className="product-grid">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}
