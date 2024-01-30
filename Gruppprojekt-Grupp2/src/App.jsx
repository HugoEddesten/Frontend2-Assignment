import './global.css'
import "typeface-dm-sans"
import "typeface-sevillana"
import "typeface-dm-serif-display"
import NavigationBar from './components/NavigationBar.jsx'
import Home from './pages/Home.jsx'
import ProductPage from './pages/ProductPage.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Footer from './components/Footer.jsx'
import Delivery from './pages/Delivery.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import Returns from './pages/Returns.jsx'
import LogIn from './pages/LogIn.jsx'
import Register from './pages/Register.jsx'
import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'



function App() {
    /*
    const mittAnrop = async () => {
        const data = await axios("http://localhost:1337/api/products")
        const convertedData = await data.json()
        console.log(convertedData);
    }


    useEffect(()=>{
        mittAnrop()
    }, [])
    */

    const [currentForm, setCurrentForm] = useState('LogIn');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

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
                    <Route path='/Delivery' element={<Delivery />} />
                    <Route path='/TermsAndConditions' element={<TermsAndConditions />} />
                    <Route path='/Returns' element={<Returns />} />
                    <Route path='/LogIn' element={<LogIn />} />
                    <Route path='/Register' element={<Register />} />

                </Routes>

                <Footer />
            </div>
        </div>
    )
}

export default App