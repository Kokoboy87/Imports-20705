import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductImg from '../assets/images/Product2.JPG'
import Footer from '../components/Footer'
import ProductCards from '../components/ProductCards'

//$ This is the Product page //

export default function Product() {
	return (
		<>
			<Navbar />
			<Hero cName="hero-mid" heroImage={ProductImg} title="Product" btnClass="hide" />
			<ProductCards />
			<Footer />
		</>
	)
}
