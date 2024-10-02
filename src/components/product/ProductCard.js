import React, { useState } from 'react'
import ProductModal from './ProductModal'

const ProductCard = ({ product }) => {
	const [isModalOpen, setModalOpen] = useState(false)

	const openModal = () => setModalOpen(true)
	const closeModal = () => setModalOpen(false)

	return (
		<>
			<div className="product-card" onClick={openModal}>
				<img src={product.image} alt={product.name} className="product-image" />
				<h3>{product.name}</h3>
				<p>${product.price}</p>
			</div>
			{isModalOpen && <ProductModal product={product} closeModal={closeModal} />}
		</>
	)
}

export default ProductCard
