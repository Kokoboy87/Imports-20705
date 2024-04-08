import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/images/About.JPG'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

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
