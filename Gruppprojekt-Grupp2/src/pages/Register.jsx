import styled from "styled-components"
import React, { useState, useEffect } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase-config'
import '../LoginAndRegisterForm.css'
import './LogIn'

function Register() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");

    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword, registerName);
            console.log(user);
        } catch {
            console.log(error.message);
        }
    }

    return (
        <div className="form-content">
            <h2>Skapa konto</h2>
            <form className="login-form">
                <label htmlFor="name">För- och efternamn</label>
                <input type="name" name="name" onChange={(event) => { setRegisterName(event.target.value) }} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={(event) => { setRegisterEmail(event.target.value) }} />

                <label htmlFor="password">Lösenord</label>
                <input type="password" id="password" name="password" onChange={(event) => { setRegisterPassword(event.target.value) }} />

                <button className="log-button" onClick={register}>Skapa konto</button>
            </form>
            <button className="link-button" onClick={event => window.location.href = '/LogIn'}>Har du redan ett konto?<br />Logga in här</button>
            {user ? user.email : "Inte Inloggad"}
        </div>
    )
}

export default Register