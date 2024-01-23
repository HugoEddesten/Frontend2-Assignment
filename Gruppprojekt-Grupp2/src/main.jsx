import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import header from './header.jsx'
import './navbar.css'
import "typeface-sevillana"
import "typeface-dm-serif-display"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
