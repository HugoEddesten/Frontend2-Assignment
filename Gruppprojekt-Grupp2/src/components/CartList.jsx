import styled from "styled-components";
import React from 'react';
import CartItem from "./CartItem"

function CartList(props){
    return(
        
        <CartListDiv>
            

           {props.products.map((product, index) => (
                <CartItem key={index} product={product} handler={props.handler}/>
            ))}
                    
        </CartListDiv>
    )
}

export default CartList

