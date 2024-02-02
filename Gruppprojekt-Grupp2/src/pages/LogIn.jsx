import styled from "styled-components"
import React, { useState } from "react"
import '../LoginAndRegisterForm.css'

const LogIn = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="form-content">
            <h2>Logga in på Super Yarn Store</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="din.email@email.com" id="email" name="email" />

                <label htmlFor="password">Lösenord</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*********" id="password" name="password" />

                <button className="log-button" type="submit">Logga in</button>
            </form>
            <button className="link-button" onClick={/*() => props.onFormSwitch('Register')*/ event => window.location.href='/Register'}>Har du inte något konto?<br />Registrera dig här</button>
        </div>
    )
}

export default LogIn