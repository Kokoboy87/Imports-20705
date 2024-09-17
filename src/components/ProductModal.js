// components/ProductModal.js
import React from 'react'

const ProductModal = ({product, closeModal}) => {
	return (
		<div className="modal">
			<div className="modal-content">
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
