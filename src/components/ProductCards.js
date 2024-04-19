import React from 'react'
import './CardItemStyles.css'
import CardItem from './CardItem'
import OliveOil from '../assets/images/OliveOil1.jpg'
import Wine from '../assets/images/Wine2.jpg'
import Olives from '../assets/images/Olives1.JPG'
import Herbs from '../assets/images/Herbs.JPG'
import Honey from '../assets/images/Honey2.jpg'

//$ This is the Products List in the Product page //

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
