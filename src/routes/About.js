import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/common/Footer'
import AboutUs from '../components/AboutUs'

const AboutImg = 'https://imports20705-images.s3.amazonaws.com/About.webp'

export default function About() {
	return (
		<>
			<Navbar />
			<Hero cName="hero-mid" heroImage={AboutImg} title="About" btnClass="hide" />
			<AboutUs />
			<Footer />
		</>
	)
}
