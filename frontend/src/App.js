import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Honey from './pages/Honey'
import OliveOil from './pages/OliveOil'
import Wine from './pages/Wine'
import Olives from './pages/Olives'
import Herbs from './pages/Herbs'
import ScrollToTop from './components/common/ScrollToTop'

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
