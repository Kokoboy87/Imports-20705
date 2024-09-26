import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import Home from './routes/Home'
import About from './routes/About'
import Product from './routes/Product'
import Contact from './routes/Contact'
import Honey from './routes/Honey'
import OliveOil from './routes/OliveOil'
import Wine from './routes/Wine'
import Olives from './routes/Olives'
import Herbs from './routes/Herbs'
import ScrollToTop from './components/common/ScrollToTop'
import {Amplify} from 'aws-amplify'
import awsconfig from './aws-exports'

// Configure Amplify
Amplify.configure(awsconfig)

function App() {
	return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/product" element={<Product />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/honey" element={<Honey />} />
					<Route path="/herbs" element={<Herbs />} />
					<Route path="/oliveOil" element={<OliveOil />} />
					<Route path="/olives" element={<Olives />} />
					<Route path="/wine" element={<Wine />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
