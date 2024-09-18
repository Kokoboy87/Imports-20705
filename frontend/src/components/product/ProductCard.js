// components/ProductCard.js
import React, {useState} from 'react'
import ProductModal from './ProductModal' // This will be the modal we'll create

const ProductCard = ({product}) => {
	const [isModalOpen, setModalOpen] = useState(false)

	const openModal = () => setModalOpen(true)
	const closeModal = () => setModalOpen(false)

	return (
		<div className="product-card" onClick={openModal}>
			<img src={product.image} alt={product.name} className="product-image" />
			<h3>{product.name}</h3>
			<p>${product.price}</p>

			{isModalOpen && <ProductModal product={product} closeModal={closeModal} />}
		</div>
	)
}

export default ProductCard
