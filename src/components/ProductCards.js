import React from 'react'
import './CardItemStyles.css'
import CardItem from './CardItem'
import OliveOil from '../assets/images/OliveOil1.jpg'
import Wine from '../assets/images/Wine1.jpg'
import Olives from '../assets/images/Olives.jpg'
import Herbs from '../assets/images/Herbs.jpg'
import Honey from '../assets/images/Honey2.jpg'

//$ This is the Products List in the Product page //

function ProductCards() {
	return (
		<div className="cards">
			<h1>Check out our products</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem src={OliveOil} text="Our Extra Virgin Olive Oil" label="Olive Oil" path="/Products" />
						<CardItem src={Wine} text="Our Exclusive Wine collection" label="Wines" path="/Products" />
					</ul>
					<ul className="cards__items">
						<CardItem src={Olives} text="Our Organic Olive Selection" label="Olives" path="/Products" />
						<CardItem src={Herbs} text="Our Exclusive Collection of Greek Wild Herbs" label="Herbs" path="/Products" />
						<CardItem src={Honey} text="Our Exclusive Collection of Greek Honey" label="Honey" path="/Products" />
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ProductCards
