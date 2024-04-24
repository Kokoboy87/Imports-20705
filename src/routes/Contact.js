import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContactImg from '../assets/images/Contact.jpg'
import Footer from '../components/Footer'
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
