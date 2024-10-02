//import React, { useState, useEffect } from 'react'
//import ProductCard from '../components/product/ProductCard' // Import the reusable product card component
//import axios from 'axios'

//export default function Honey() {
//	const [products, setProducts] = useState([])

//	useEffect(() => {
//		const fetchProducts = async () => {
//			try {
//				const response = await axios.get('/api/products/honey') // Fetch from your API
//				setProducts(response.data)
//			} catch (error) {
//				console.error('Error fetching honey products', error)
//			}
//		}

//		fetchProducts()
//	}, [])

//	return (
//		<div className="product-grid">
//			{products.map((product) => (
//				<ProductCard key={product.id} product={product} />
//			))}
//		</div>
//	)
//}

//$ Test MockData //

import React from 'react'
import ProductNavbar from '../components/common/ProductNavbar'
import ProductCard from '../components/product/ProductCard'
import '../components/styles/ProductStyles.css'

const honeyProducts = [
	{ id: 1, name: 'Extra Virgin Olive Oil', image: 'https://imports20705-images.s3.amazonaws.com/Honey1.jpg', price: 30, description: 'Description for Extra Virgin Olive Oil' },
	// Add more products as needed
	{ id: 2, name: 'Extra Virgin Olive Oil', image: 'https://imports20705-images.s3.amazonaws.com/Honey2.jpg', price: 30, description: 'Description for Extra Virgin Olive Oil' },
	// Add more products as needed
	{ id: 3, name: 'Extra Virgin Olive Oil', image: 'https://imports20705-images.s3.amazonaws.com/Honey1.jpg', price: 30, description: 'Description for Extra Virgin Olive Oil' },
	// Add more products as needed
	{ id: 4, name: 'Extra Virgin Olive Oil', image: 'https://imports20705-images.s3.amazonaws.com/Honey2.jpg', price: 30, description: 'Description for Extra Virgin Olive Oil' },
	// Add more products as needed
	{ id: 5, name: 'Extra Virgin Olive Oil', image: 'https://imports20705-images.s3.amazonaws.com/Honey1.jpg', price: 30, description: 'Description for Extra Virgin Olive Oil' },
]

const Honey = () => {
	return (
		<div>
			<ProductNavbar />
			<div className="product-grid">
				{honeyProducts.map((product) => {
					return <ProductCard key={product.id} product={product} />
				})}
			</div>
		</div>
	)
}

export default Honey
