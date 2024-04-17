import {Component} from 'react'
import './HomeInfoStyles.css'

//$ This is the Greek Product in the first/hero page//
class ProductData extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<div className="product-text">
					<h2>{this.props.heading} </h2>
					<p>{this.props.text}</p>
				</div>
				<div className="image">
					<img src={this.props.img1} alt="Greek Product" />
					<img src={this.props.img2} alt="Greek Product" />
				</div>
			</div>
		)
	}
}

export default ProductData
