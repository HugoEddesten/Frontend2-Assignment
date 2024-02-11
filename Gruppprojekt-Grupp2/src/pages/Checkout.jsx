import styled from "styled-components"
import "../checkout.css"
import { useState } from "react"



const Checkout = () => {
    const [delivery, setDelivery] = useState('')

    const handleDelivery = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target.form)


        console.log(formData.get('email'))
        setDelivery(formData.get('option'))
    }

    
    return (
        <div className="checkout-page-content">
            <form action="">
                <h2>Addressuppgifter</h2>

                <div className="input-fields">
                    <input className="form_name" type="text" id="email" name="email" placeholder="Epostadress" />
                </div>

                <div className="input-fields">
                    <input className="form_name" type="text" id="firstName" name="firstName" placeholder="Förnamn" />
                    <input className="form_name" type="text" id="lastName" name="lastName" placeholder="Efternamn" />
                </div>

                <div className="input-fields">
                    <input className="form_name" type="text" id="streetAddress" name="streetAddress" placeholder="Gatunamn" />
                    <input className="form_name" type="text" id="city" name="city" placeholder="Ort" />
                    <label htmlFor="postalCode"></label>
                    <input className="form_name" type="text" id="postalCode" name="postalCode" placeholder="Postnummer" maxlength="5" />
                </div>

                <h2 className="h2-margin">Betalning</h2>

                <div className="input-fields">
                    <input className="form_name" type="text" id="fullName" name="fullName" placeholder="Kortinnehavare" />
                </div>

                <div className="input-fields">
                    <input className="form_name" type="text" id="cardNumber" name="cardNumber" placeholder="Kortnummer" maxlength="16" />
                </div>

                <div className="input-fields">
                    <input className="form_name" type="text" id="expirationDate" name="expirationDate" placeholder="MM/ÅÅ" maxlength="4" />
                    <input className="form_name" type="text" id="cvc" name="cvc" placeholder="CVC" maxlength="3" />
                </div>

                <h2 className="h2-margin">Frakt: 49 kr</h2>

                <label>
                    <input className="radiobutton" type="radio" name="option" value="beppe" />
                    Beppe - världens snabbaste alternativ
                </label>
                <br />
                <label>
                    <input className="radiobutton" type="radio" name="option" value="skata" />
                    Skata - vid leverans av blanka garner
                </label>
                <br />
                <label>
                    <input className="radiobutton" type="radio" name="option" value="kungsörn" />
                    Kungsörn - vid tunga leveranser
                </label>
                <br />
                <label>
                    <input className="radiobutton" type="radio" name="option" value="brevduva" />
                    Brevduva - levererar enstaka nystan
                </label>
                <br />
                <label>
                    <input className="radiobutton" type="radio" name="option" value="uggla" />
                    Uggla - levererar med stor visdom till din exakta adress
                </label>
                <br />
                <label>
                    <input className="radiobutton" type="radio" name="option" value="änglabud" />
                    Änglabud - en himmelsk leverans
                </label>

            </form>
            <button className="buy-button" type="submit" onClick={event => window.location.href = '/SuccessfulCheckout'}>Köp</button>
        </div>


    )

}

export default Checkout
