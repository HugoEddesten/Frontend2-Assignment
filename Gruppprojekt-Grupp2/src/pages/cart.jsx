import styled from "styled-components"
import CartList from "../components/CartList"
import '../footer.css'




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
    background-color: #b5cdd7;
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
                        <button>Fortsätt handla</button>
                        <CartSum>
                        
                            <CartBox>
                                Bild på produkt
                            </CartBox>

                            

                            <button id="minus">−</button>
                            <input type="number" value="0" id="input"/>
                            <button id="plus">+</button>
                            <button id="remove">Remove</button>
                            
                            
                            
                            
                        </CartSum>
                       
                        <button>Till kassan - länk till Delivery.jsx</button>
                    </CartPageContent>
                    <CartPageContent>
                        Kanske ingenting här?<br />
                        Css till knapp-partiet ovan behövs.
                        
                    </CartPageContent>
            </CartPageDiv>
        </div>
    )
}

export default Cart