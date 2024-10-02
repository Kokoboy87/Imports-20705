//import React, { useState, useEffect } from 'react'
//import ProductCard from '../components/product/ProductCard' // Ensure this path is correct

//export default function OliveOil() {
//	const [products, setProducts] = useState([])

//	useEffect(() => {
//		// Mock product data for testing
//		const mockProducts = [
//			{
//				id: 1,
//				name: 'Extra Virgin Olive Oil',
//				price: 30,
//				image: 'https://your-s3-url/olive-oil.jpg', // Replace with your image URL
//				description: 'High quality olive oil from Greece',
//			},
//			{
//				id: 2,
//				name: 'Organic Olive Oil',
//				price: 25,
//				image: 'https://your-s3-url/organic-olive-oil.jpg', // Replace with your image URL
//				description: 'Organic olive oil, cold-pressed.',
//			},
//			// Add more mock products as needed
//		]

//		setProducts(mockProducts) // Set mock data to products
//	}, [])

//	return (
//		<div className="product-grid">
//			{products.length > 0 ? ( // Check if products exist
//				products.map((product) => <ProductCard key={product.id} product={product} />)
//			) : (
//				<p>No products available.</p> // Show a message if no products found
//			)}
//		</div>
//	)
//}

//$ Test MockData //

import React from 'react'
import ProductNavbar from '../components/common/ProductNavbar'
import ProductCard from '../components/product/ProductCard'
import '../components/styles/ProductStyles.css'

const oliveOilProducts = [
	{ id: 1, name: 'Extra Virgin Olive Oil', image: 'https://imports20705-images.s3.amazonaws.com/OliveOil1.jpg', price: 30, description: 'Description for Extra Virgin Olive Oil' },
	// Add more products as needed
	{ id: 2, name: 'Extra Virgin Olive Oil', image: 'https://imports20705-images.s3.amazonaws.com/OliveOil2.jpg', price: 30, description: 'Description for Extra Virgin Olive Oil' },
	// Add more products as needed
	{ id: 3, name: 'Extra Virgin Olive Oil', image: 'https://imports20705-images.s3.amazonaws.com/OliveOil1.jpg', price: 30, description: 'Description for Extra Virgin Olive Oil' },
	// Add more products as needed
	{ id: 4, name: 'Extra Virgin Olive Oil', image: 'https://imports20705-images.s3.amazonaws.com/OliveOil2.jpg', price: 30, description: 'Description for Extra Virgin Olive Oil' },
	// Add more products as needed
	{ id: 5, name: 'Extra Virgin Olive Oil', image: 'https://imports20705-images.s3.amazonaws.com/OliveOil1.jpg', price: 30, description: 'Description for Extra Virgin Olive Oil' },
]

const OliveOil = () => {
	return (
		<div>
			<ProductNavbar />
			<div className="product-grid">
				{oliveOilProducts.map((product) => {
					return <ProductCard key={product.id} product={product} />
				})}
			</div>
		</div>
	)
}

export default OliveOil
