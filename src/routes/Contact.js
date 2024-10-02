import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/common/Footer'
import ContactForm from '../components/ContactForm'

const ContactImg = 'https://imports20705-images.s3.amazonaws.com/Contact.webp'

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
