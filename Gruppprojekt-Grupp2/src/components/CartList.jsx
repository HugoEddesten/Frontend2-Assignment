import styled from "styled-components";
import React, { useContext, useState } from 'react';
import CartItem from "./CartItem"
import { CartContext } from "../App"


const CartListDiv = styled.p`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`

const CartListText = styled.p`
    display: flex;
    align-items: right;
    margin-right: .33rem;
    margin-left: .33rem;
    width: 10em;
    padding: .33rem;
    border: red 1px solid;
`


function handleChange(event) {
    // Your logic for handling the change goes here
    console.log();
}

function CartList(props){
    



    return (
        <CartListDiv>
           {props.products.map((product, index) => (
                <CartItem key={index} product={product}  handler={props.handler}></CartItem>


                
            ))}
            
        <CartListText  onChange = {handleChange}  type="number" id="inTotal" name="inTotal"> kr</CartListText>
        </CartListDiv>
    )
}

export default CartList

