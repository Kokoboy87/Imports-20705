import { Link } from 'react-router-dom'
import '../styles/FooterStyles.css'

const NavLogo = 'https://imports20705-images.s3.amazonaws.com/NavbarLogo.png'

const Footer = () => {
	return (
		<div className="footer">
			<div className="top">
				<div>
					<Link to="/">
						<img src={NavLogo} alt="Logo" className="footer-logo" />
					</Link>
				</div>
				<div>
					<a href="/">
						<i className="fa-brands fa-facebook-square"></i>
					</a>
					<a href="/">
						<i className="fa-brands fa-instagram-square"></i>
					</a>
					<a href="/">
						<i className="fa-brands fa-twitter-square"></i>
					</a>
					<a href="/">
						<i className="fa-brands fa-youtube-square"></i>
					</a>
				</div>
			</div>
			<div className="bottom">
				<div>
					<h4>About Us</h4>
					<a href="/">Testimonials</a>
					<a href="/">Careers</a>
					<a href="/">Terms of Service</a>
				</div>
				<div>
					<h4>Contact Us</h4>
					<a href="/">Contact</a>
					<a href="/">Support</a>
					<a href="/">Location</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
