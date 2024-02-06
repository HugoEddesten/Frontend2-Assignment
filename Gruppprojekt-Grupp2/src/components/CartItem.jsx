import styled from "styled-components"
import React from "react"

const CartItemDiv = styled.div`
flex-direction: row;
display: flex;
`

const CartItemImg = styled.img`
width:50px;
height:50px;

`

const CartItemText = styled.p`
`


function CartItem (props){
    return(
        
        <CartItemDiv>

            <CartItemImg src={"http://localhost:1300" + props.product?.attributes?.image.data.attributes.url}/>&nbsp;
            <CartItemText> {props.product?.attributes?.title}</CartItemText> &nbsp;
                <CartItemText> {props.product?.attributes?.quantity}</CartItemText>     &nbsp;           
                <CartItemText> {props.product?.attributes?.price}</CartItemText>
                &nbsp;
                <input type="number" id="quantity" name="quantity" min="1" max={props.product?.attributes?.quantity} />

                <CartItemText> {props.product?.attributes?.total}</CartItemText>
        </CartItemDiv>
    )
}

export default CartItem

