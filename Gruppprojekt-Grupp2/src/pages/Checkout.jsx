import styled from "styled-components"
import "../checkout.css"


const Checkout = () => {
    return (
        <div className="CheckoutPageDiv">
            <div className="CheckoutPageContent">

            <form action="">
            <input type="text" id="email" name="email" placeholder="Epostadress" />  <br />               
            <input type="text" id="firstName" name="username" placeholder="Förnamn" />                        
            <input type="text" id="lastName" name="username" placeholder="Efternamn" /> <br />

            <input type="text" id="streetAddress" name="streetAddress" placeholder="Gatunamn" />                        
            <input type="text" id="postalCde" name="postalCode" placeholder="Postnummer" /> <br />

            <input type="text" id="city" name="city" placeholder="Ort" />
                
                
                <button><a href="./SuccessfulCheckout">Beställ</a></button>
            </form>
            </div>
        </div>
    )
}

export default Checkout
