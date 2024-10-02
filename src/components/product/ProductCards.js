import React from 'react'
import '../styles/CardItemStyles.css'
import CardItem from '../CardItem'
//import Wine from '../assets/images/Wine2.jpg'
//import Olives from '../assets/images/Olives1.webp'
//import Herbs from '../assets/images/Herbs.webp'
//import Honey from '../../assets/images/Honey2.jpg'

const Olives = 'https://imports20705-images.s3.amazonaws.com/Olives1.webp'
const Herbs = 'https://imports20705-images.s3.amazonaws.com/Herbs.webp'
const Wine = 'https://imports20705-images.s3.amazonaws.com/Wine2.jpg'
const Honey = 'https://imports20705-images.s3.amazonaws.com/Honey2.jpg'
const OliveOil = 'https://imports20705-images.s3.amazonaws.com/OliveOil1.jpg'

//$ This is the Products List in the Product page

function ProductCards() {
	return (
		<div className="cards">
			<h1>Check out our products</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem src={OliveOil} text="Our Extra Virgin Olive Oil" label="Olive Oil" path="/OliveOil" />
						<CardItem src={Wine} text="Our Exclusive Wine collection" label="Wines" path="/wine" />
					</ul>
					<ul className="cards__items">
						<CardItem src={Olives} text="Our Organic Olive Selection" label="Olives" path="/olives" />
						<CardItem src={Herbs} text="Our Exclusive Collection of Greek Wild Herbs" label="Herbs" path="/herbs" />
						<CardItem src={Honey} text="Our Exclusive Collection of Greek Honey" label="Honey" path="/honey" />
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ProductCards
