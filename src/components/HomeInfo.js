import '../components/styles/HomeInfoStyles.css'
import ProductData from './product/ProductData'

const Wine1 = 'https://imports20705-images.s3.amazonaws.com/Wine1.jpg'
const Wine2 = 'https://imports20705-images.s3.amazonaws.com/Wine2.jpg'
const OliveOil1 = 'https://imports20705-images.s3.amazonaws.com/OliveOil1.jpg'
const OliveOil2 = 'https://imports20705-images.s3.amazonaws.com/OliveOil2.jpg'
const Honey1 = 'https://imports20705-images.s3.amazonaws.com/Honey1.jpg'
const Honey2 = 'https://imports20705-images.s3.amazonaws.com/Honey2.jpg'

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
