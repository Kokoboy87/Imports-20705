import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/Hero'
import HeroImg from '../assets/images/Hero1.webp'
import HomeInfo from '../components/HomeInfo'
import Footer from '../components/common/Footer'

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero cName="hero" heroImage={HeroImg} title="Imports 20705" text=" Welcome To Our Exclusive Boutique Greek Product " buttonText="Products" url="/product" btnClass="show" />
			<HomeInfo />
			<Footer />
		</>
	)
}
