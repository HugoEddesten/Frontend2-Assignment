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
        <div className="CheckoutPageDiv">
            {
                delivery ? <p>hejhopp {delivery}</p> : null
            }
            <div className="CheckoutPageContent">

            <form action="">
            <input type="text" id="email" name="email" placeholder="Epostadress" />  <br />               
            <input type="text" id="firstName" name="username" placeholder="Förnamn" />                        
            <input type="text" id="lastName" name="username" placeholder="Efternamn" /> <br />

            <input type="text" id="streetAddress" name="streetAddress" placeholder="Gatunamn" />                        
            <input type="text" id="postalCde" name="postalCode" placeholder="Postnummer" /> <br />

            <input type="text" id="city" name="city" placeholder="Ort" />


<br /><br />
            <label>                        
                        <input className="radiobutton"  type="radio" name="option" value="beppe"/>
                        Beppe - världens snabbaste alternativ
                    </label>
                    <br />

                    <label>
                        <input className="radiobutton" type="radio" name="option" value="skata"/>
                        Skata - vid leverans av blanka garner
                    </label>
                    <br />

                    <label>
                        <input className="radiobutton" type="radio" name="option" value="kungsörn"/>
                        Kungsörn - vid tunga leveranser
                    </label>
                    <br />
                    <label>
                        <input className="radiobutton" type="radio" name="option" value="änglabud"/>
                        Änglabud - en himmelsk leverans
                    </label>
                    <br />
                    <label>
                        <input className="radiobutton" type="radio" name="option" value="brevduva"/>
                       Brevduva - levererar enstaka nystan
                    </label>
                    <br />

                    <input type="submit" onClick={handleDelivery}/>
                
                
            </form>

            
            </div>
            <div className="CheckoutPageContent">

            <form id="radioForm">
                    
                </form>

            </div>
        </div>
    )
}

export default Checkout
