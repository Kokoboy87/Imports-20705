import Wine1 from '../assets/images/Wine1.jpg'
import Wine2 from '../assets/images/Wine2.jpg'
import OliveOil1 from '../assets/images/OliveOil1.jpg'
import OliveOil2 from '../assets/images/OliveOil2.jpg'
import Honey1 from '../assets/images/Honey1.jpg'
import Honey2 from '../assets/images/Honey2.jpg'
import '../components/styles/HomeInfoStyles.css'
import ProductData from './product/ProductData'

const HomeInfo = () => {
	return (
		<div className="homeInfo">
			<h1>Greek Product </h1>
			<p>Guide To Our Product</p>
			<ProductData
				className="product-desc"
				heading="Greek Wine"
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium dolores veniam dolorum! Ut harum eveniet aut delectus ex! Eaque consequuntur repellat cum est corrupti, enim at magnam sequi. Repellat!"
				img1={Wine1}
				img2={Wine2}
			/>
			<ProductData
				className="product-desc-reverse"
				heading="Greek Olive Oil"
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium dolores veniam dolorum! Ut harum eveniet aut delectus ex! Eaque consequuntur repellat cum est corrupti, enim at magnam sequi. Repellat!"
				img1={OliveOil1}
				img2={OliveOil2}
			/>
			<ProductData
				className="product-desc"
				heading="Greek Honey"
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium dolores veniam dolorum! Ut harum eveniet aut delectus ex! Eaque consequuntur repellat cum est corrupti, enim at magnam sequi. Repellat!"
				img1={Honey1}
				img2={Honey2}
			/>
		</div>
	)
}

export default HomeInfo
