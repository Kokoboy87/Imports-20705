import {Component} from 'react'

import './HomeInfoStyles.css'

class ProductData extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<div className="product-text">
					<h2>{this.props.heading} </h2>
					<p>{this.props.text}</p>
				</div>
				<div className="image">
					<img src={this.props.img1} alt="wine" />
					<img src={this.props.img2} alt="wine" />
				</div>
			</div>
		)
	}
}

export default ProductData
