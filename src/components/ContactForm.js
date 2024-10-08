import '../components/styles/ContactFormStyles.css'

function ContactForm() {
	return (
		<div className="form-container">
			<h1>Send a message to us!</h1>
			<form action="">
				<input type="text" placeholder="Name" />
				<input type="email" placeholder="Email" />
				<input type="" placeholder="Subject" />
				<textarea placeholder="Message" cols="30" rows="4"></textarea>
				<button>Send Message</button>
			</form>
		</div>
	)
}

export default ContactForm
