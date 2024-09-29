import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/Hero'
const ContactImg = require('https://imports20705-images.s3.amazonaws.com/Contact.webp')
import Footer from '../components/common/Footer'
import ContactForm from '../components/ContactForm'

export default function Contact() {
	return (
		<>
			<Navbar />
			<Hero cName="hero-mid" heroImage={ContactImg} title="Contact Us" btnClass="hide" />
			<ContactForm />
			<Footer />
		</>
	)
}
