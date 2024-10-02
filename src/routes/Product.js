import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/common/Footer'
import ProductCards from '../components/product/ProductCards'

const ProductImg = 'https://imports20705-images.s3.amazonaws.com/Product2.webp'

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
