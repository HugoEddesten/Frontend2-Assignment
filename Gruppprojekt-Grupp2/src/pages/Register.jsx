import styled from "styled-components"
import React, { useState } from "react"
import '../LoginAndRegisterForm.css'

const RegisterPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 2rem 0;
    text-align: center;
`

const RegisterPageContent = styled.div`
    margin: 0 2rem 2rem 2rem;
    background-color: #F0F0F0;
    padding: 1rem;
`

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="form-content">
            <h2>Skapa konto</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="name">För- och efternamn</label>
                <input value={name} type="name" placeholder="För- och efternamn" name="name" />

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="din.email@email.com" id="email" name="email" />

                <label htmlFor="password">Lösenord</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*********" id="password" name="password" />

                <button className="log-button" type="submit">Skapa konto</button>
            </form>
            <button className="link-button" onClick={/*() => props.onFormSwitch('LogIn')*/ event => window.location.href='/LogIn'}>Har du redan ett konto?<br />Logga in här</button>
        </div>
    )
}

export default Register