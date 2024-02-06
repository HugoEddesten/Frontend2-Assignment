import styled from "styled-components"
import React, { useState } from "react"
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase-config'
import {NavLink, useNavigate} from 'react-router-dom'
import '../LoginAndRegisterForm.css'
import './Register'

function LogIn() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            useNavigate("/Home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
}

    return (
        <div className="form-content">
            <h2>Logga in på Super Yarn Store</h2>
            <form className="login-form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={(e) => setLoginEmail(e.target.value) } />

                <label htmlFor="password">Lösenord</label>
                <input type="password" id="password" name="password" onChange={(e) => setLoginPassword(e.target.value) } />

                <button className="log-button" onClick={onLogin}>Logga in</button>
            </form>
            <button className="link-button" onClick={event => window.location.href = '/Register'}>Har du inte något konto?<br />Registrera dig här</button>
        </div>
    )
}

export default LogIn