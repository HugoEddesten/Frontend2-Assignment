import styled from "styled-components"
import React, { useContext, useState } from "react"
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
`
const CartItemButton = styled.button`
    display: flex;
    align-items: center;
    margin-right: .33rem;
    margin-left: .33rem;
`
/*
const CartList = () => {
    const history= useHistory();
    const reload = () => {
      history(0);
    }
  }

*/



function CartItem (props){

        const [quantityInput, setquanityInput] = useState(0);
        const handleChange = (event) => {       
          setquanityInput(event.target.value);
        };





    return  (
        <CartItemDiv>

            <CartItemImg src={"http://localhost:1300" + props.product?.attributes?.image.data.attributes.url}/>&nbsp;
            
            <CartItemText> {props.product?.attributes?.title}</CartItemText> 
            <CartItemText> {props.product?.attributes?.price} kr</CartItemText>
 
            <input onChange = {handleChange} type="number" id="quantityInput" name="quantityInput" min="1" max={props.product?.attributes?.quantity} /> 



 
            
            <CartItemText> Kvar i lager: {props.product?.attributes?.quantity - quantityInput}</CartItemText>



            <CartItemText> {props.product?.attributes?.totalPrice}</CartItemText>

            <p id="totalPrice">Totalt: 0 </p>

        

            
              <CartItemButton onClick={() => props.handler(props.product)}>Ta bort</CartItemButton>
                  
        
               

        </CartItemDiv>
    )
}

export default CartItem



