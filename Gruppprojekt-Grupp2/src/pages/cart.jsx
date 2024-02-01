import styled from "styled-components"
import CartList from "../components/CartList"
import '../cart.css'
import SuccessfulCheckout from "./SuccessfulCheckout"
import { IoCart } from "react-icons/io5"
import garnnystan from '../assets/garnnystan.jpg'



const CartPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 2rem 0;
`

const CartPageContent = styled.div`
    margin: 0 2rem 2rem 2rem;
    background-color: white;
    padding: 1rem;
    
`

const CartSum = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
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
    width: 40px;
    height: 40px;
    margin: 2rem 0;
    margin-right: 5px;
`




const Cart = () => {
    return (
        <div>
            <CartPageDiv>
                <CartPageContent>
                    <h2>Din kundvagn</h2>
                    <button class="productbutton"><a href="./ProductPage">Fortsätt handla</a></button>

                    <CartSum>
                        <CartBox>
                            <img src="../assets/garnnystan" alt="" />
                        </CartBox>
                        Namn på garn

                        <button class="plus_minus_button productbutton" id="minus">−</button>
                        <input class="value_button" type="number" value="0" id="input" />
                        <button class="plus_minus_button productbutton" id="plus">+</button>
                        <button id="remove">Ev remove</button>
                        <p class="quantitys_left">Pris</p>
                        

                    </CartSum>

                    <button><a href="./Checkout">Till kassan</a></button>
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