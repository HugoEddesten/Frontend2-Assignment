import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
<<<<<<< HEAD
import header from './header.jsx'
=======
import './navbar.css'
import { BrowserRouter } from "react-router-dom"
>>>>>>> 07b227206dbf8273a747a07645c58a8bf9dfa410

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
