import styled from "styled-components"
import React from "react"

const CartItemDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: .33rem;
`

const CartItemImg = styled.img`
    width: 5rem;
    height: 4rem;
    object-fit: cover;
`

const CartItemText = styled.p`
    display: flex;
    align-items: center;
    margin-right: .33rem;
    margin-left: .33rem;
`

function CartItem (props){
    return  (
        <CartItemDiv>

            <CartItemImg src={"http://localhost:1300" + props.product?.attributes?.image.data.attributes.url}/>&nbsp;
            <CartItemText> {props.product?.attributes?.title}</CartItemText> 
            <CartItemText> {props.product?.attributes?.price} kr</CartItemText>
 
            <input type="number" id="quantity" name="quantity" min="1" max={props.product?.attributes?.quantity} />




            <CartItemText> {props.product?.attributes?.quantity} st</CartItemText>    
             

            <CartItemText> {props.product?.attributes?.total}totalsumma + remove</CartItemText>
        </CartItemDiv>
    )
}

export default CartItem


/*<label for="quantityInput">Antal:</label>
<input type="number" id="quantityInput" />
<p id="totalPrice">Totalt pris: 0 kr</p>*/
