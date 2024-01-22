import './global.css'
import NavigationBar from './components/NavigationBar.jsx'
import Home from './pages/Home.jsx'
import ProductPage from './pages/ProductPage.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <div>
            <div>
                <NavigationBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/ProductPage' element={<ProductPage />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Cart' element={<Cart />} />
                </Routes>
            </div>
        </div>
    )
}

export default App