import styled from "styled-components"
import CartList from "../components/CartList"

const CartPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
`

const CartPageContent = styled.div`
    margin: 0 2rem 2rem 2rem;
    background-color: #F0F0F0;
    padding: 1rem;
`

const CartSum = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: red;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
    padding: 2rem;
`

const CartBox = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: yellow;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
`




const Cart = () => {
    return (
        <div>
            <CartPageDiv>
                    <CartPageContent>
                        <h2>Din kundvagn</h2>
                        <CartSum>
                            <CartBox>
                                Bild på produkt
                            </CartBox>

                            

                            <button id="minus">−</button>
                            <input type="number" value="0" id="input"/>
                            <button id="plus">+</button>
                            <button id="remove">Remove</button>
                        </CartSum>
                    </CartPageContent>
                    <CartPageContent>
                        
                        <h2>Du har bra smak! Lyckad beställning - på egen sida?</h2>
                        <p>1000 tack för din beställning. <br />
                            Du kommer höra från oss igen när dina varor har packats och skickats. <br />
                            Ha det bra så länge! <br /><br />
                            Gladeliga hälsningar från Super Yarn Company <br /><br />
                            
                            Roliga/trevliga bilder?<br />
                            Nåt glatt i alla fall, kanske en selfie på oss tre, för att pigga upp <br /> <br />

                             Har du frågor så tveka inte att kontakta oss. <br />
                             Du kan nå oss på e-postadressen kundservice@superyarncompany.se eller via telefon på 08-123&nbsp;45&nbsp;67. Alla vardagar 10.00-12.00, 12.30-16.00.
                            
                            </p>
                    </CartPageContent>
            </CartPageDiv>
        </div>
    )
}

export default Cart