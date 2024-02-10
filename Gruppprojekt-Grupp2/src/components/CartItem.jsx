import styled from "styled-components"
import React, { useContext, useEffect, useState } from "react"
import { Navigate, useNavigate, useSearchParams } from "react-router-dom"
import { CartContext } from "../App"

const CartItemDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: .33rem;
`

const CartItemImg = styled.img`
    width: 5rem;
    height: 4rem;
    object-fit: cover;
    border-radius: .33rem;
`

const CartItemText = styled.p`
    display: flex;
    align-items: center;
    margin-right: .33rem;
    margin-left: .33rem;
    width: 10em;
    padding: .33rem;
`
const CartItemButton = styled.button`
    display: flex;
    align-items: center;
    margin-right: .33rem;
    margin-left: .33rem;
    width: 4em;
`

const QuantityInput = styled.input`
    display: flex;
    align-items: center;
    margin-right: .33rem;
    margin-left: .33rem;
    width: 4em;
`



function CartItem (props){

        const [totalPrice, setTotalPrice] = useState(0);

        const [quantityInput, setquantityInput] = useState(0);
        const handleChange = (event) => {       
          setquantityInput(event.target.value);          
        };
        
        useEffect(() => {
            setTotalPrice(quantityInput * props.product.attributes.price);
         },[quantityInput])

        useEffect(() => {
          console.log(quantityInput);
          props.onItemTotalChange(totalPrice);
        },[totalPrice])
   




    return  (
        <CartItemDiv>

            <CartItemImg src={"http://localhost:1300" + props.product?.attributes?.image.data.attributes.url}/>
            
            <CartItemText> {props.product?.attributes?.title}</CartItemText> 
            <CartItemText> {props.product?.attributes?.price} kr</CartItemText>
 
            <QuantityInput onChange = {handleChange} placeholder={0} type="number" id="quantityInput" name="quantityInput" min="1" max={props.product?.attributes?.quantity} />             
            <CartItemText> Kvar i lager: {props.product?.attributes?.quantity - quantityInput}</CartItemText>

            
            <CartItemText type="number" id="totalPrice" name="totalPrice" max={quantityInput}>{totalPrice} kr</CartItemText>


            
            <CartItemButton onClick={() => props.handler(props.product)}>Ta bort</CartItemButton> 

        
              


         

        </CartItemDiv>
         
    )
}

export default CartItem