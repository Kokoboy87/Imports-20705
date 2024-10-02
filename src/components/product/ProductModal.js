import React from 'react'
import '../styles/ProductModal.css'

const ProductModal = ({ product, closeModal }) => {
	// Prevent event bubbling to avoid accidental close
	const handleModalClick = (e) => {
		e.stopPropagation() // Prevents the click from bubbling up to the parent
	}

	return (
		<div className="modal" onClick={closeModal}>
			<div className="modal-content" onClick={handleModalClick}>
				<span className="close" onClick={closeModal}>
					&times;
				</span>
				<h2>{product.name}</h2>
				<img src={product.image} alt={product.name} className="modal-image" />
				<p>{product.description}</p>
				<p>
					<strong>Price:</strong> ${product.price}
				</p>
			</div>
		</div>
	)
}

export default ProductModal
