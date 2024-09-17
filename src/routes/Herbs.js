//import React from 'react'

//export default function Herbs() {
//	return (
//		<div>
//			<h1>Herbs</h1>
//		</div>
//	)
//}

//$ Test //

import React, {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard' // Import the reusable product card component
import axios from 'axios'

export default function Herbs() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get('/api/products/herbs') // Fetch from your API
				setProducts(response.data)
			} catch (error) {
				console.error('Error fetching herb products', error)
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
