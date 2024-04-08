import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import Home from './routes/Home'
import About from './routes/About'
import Product from './routes/Product'
import Contact from './routes/Contact'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/product" element={<Product />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
