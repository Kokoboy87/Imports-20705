import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/ProductNavbar.css' // New CSS file for the ProductNavbar
import { MenuProduct } from '../MenuProduct' // Ensure this points to the correct file

const NavLogo = 'https://imports20705-images.s3.amazonaws.com/Imports_20705_+solid.png'

class ProductNavbar extends Component {
	state = { clicked: false }

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked })
	}

	render() {
		return (
			<nav className="ProductNavbarItems">
				<Link to="/">
					<img src={NavLogo} alt="Logo" className="navbar-logo" />
				</Link>
				<div className="menu-icons" onClick={this.handleClick}>
					<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>
				<ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
					{MenuProduct.map((item, index) => {
						return (
							<li key={index}>
								<Link className={item.cName} to={item.url}>
									<i className={item.icon}></i>
									{item.title}
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		)
	}
}

export default ProductNavbar
