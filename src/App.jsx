import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Legal from './pages/Legal.jsx'
import Cart from './pages/Cart.jsx'
import { Routes, Route } from 'react-router-dom'



export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
	<Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  )
}
