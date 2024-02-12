import styled from "styled-components"
import React, { useState, useEffect } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase-config'
import { NavLink, useNavigate } from 'react-router-dom'
import '../LoginAndRegisterForm.css'
import './LogIn'

function Register() {
    const [registerName, setRegisterName] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, registerEmail, registerPassword, registerName )
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    return (
        <div className="form-content">
            <h2>Skapa konto</h2>
            <form className="login-form">
                <label htmlFor="name">För- och efternamn</label>
                <input type="name" name="name" value={registerName} onChange={(e) => setRegisterName(e.target.value) } />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value) } required />

                <label htmlFor="password">Lösenord</label>
                <input type="password" id="password" name="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value) } required />

                <button className="log-button" onClick={onSubmit}>Skapa konto</button>
            </form>
            <button className="link-button" onClick={event => window.location.href = '/LogIn'}>Har du redan ett konto?<br />Logga in här</button>
            
        </div>
    )
}

export default Register