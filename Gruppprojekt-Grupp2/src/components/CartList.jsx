import styled from "styled-components";
import ProductItem from "./ProductItem"
import React from 'react';
import CartItem from "./CartItem"

function CartList(props){
    return(
        
        <CartListDiv>
            

           {props.products.map((product, index) => (
                <ProductItem key={index} product={product} handler={props.handler}/>
            ))}
           <p>hej igen</p>           
        </CartListDiv>
    )
}

export default CartList

