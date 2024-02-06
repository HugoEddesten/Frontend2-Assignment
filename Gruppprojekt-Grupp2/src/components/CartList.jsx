import styled from "styled-components";
import React from 'react';
import CartItem from "./CartItem"

const CartListDiv = styled.p`
flex-direction: column;
display: flex;
`

function CartList(props){
    return(
        
        <CartListDiv>
            

           {props.products.map((product, index) => (
                <CartItem key={index} product={product}/>
            ))}
                    
        </CartListDiv>
    )
}

export default CartList

