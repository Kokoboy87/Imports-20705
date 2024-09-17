//import React from 'react'

//export default function Honey() {
//	return (
//		<div>
//			<h1>Honey</h1>
//		</div>
//	)
//}

//$ Test  //

import React, {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard' // Import the reusable product card component
import axios from 'axios'

export default function Honey() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get('/api/products/honey') // Fetch from your API
				setProducts(response.data)
			} catch (error) {
				console.error('Error fetching honey products', error)
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
