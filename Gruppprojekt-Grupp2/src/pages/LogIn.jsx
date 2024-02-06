import styled from "styled-components"
import React, { useState } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase-config'
import '../LoginAndRegisterForm.css'
import './Register'

function LogIn() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {

    }

    const logout = async () => {

    }

    return (
        <div className="form-content">
            <h2>Logga in på Super Yarn Store</h2>
            <form className="login-form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={(event) => { setLoginEmail(event.target.value) }} />

                <label htmlFor="password">Lösenord</label>
                <input type="password" id="password" name="password" onChange={(event) => { setLoginPassword(event.target.value) }} />

                <button className="log-button" type="submit">Logga in</button>
            </form>
            <button className="link-button" onClick={event => window.location.href = '/Register'}>Har du inte något konto?<br />Registrera dig här</button>
        </div>
    )
}

export default LogIn