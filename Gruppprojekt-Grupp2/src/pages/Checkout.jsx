import styled from "styled-components"
import "../checkout.css"


const Checkout = () => {
    return (
        <div className="checkout-page-content">
            <form action="">
                <h2>Addressuppgifter</h2>
                <input type="text" id="email" name="email" placeholder="Epostadress" />  <br />               
                <input type="text" id="firstName" name="username" placeholder="Förnamn" />                        
                <input type="text" id="lastName" name="username" placeholder="Efternamn" /> <br />

                <input type="text" id="streetAddress" name="streetAddress" placeholder="Gatunamn" />                        
                <input type="text" id="postalCde" name="postalCode" placeholder="Postnummer" /> <br />
                <input type="text" id="city" name="city" placeholder="Ort" />
                
                <h2>Frakt</h2>
                <p>49kr</p>
            </form>
            <button className="buy-button" type="submit" onClick={event => window.location.href='/SuccessfulCheckout'}>Köp</button>
        </div>
    )
}

export default Checkout
