import styled from "styled-components"
import React from "react"

function CartItem (props){
    return(
        
        <CartItemDiv>
            
          
           {props.products.map((product, index) => (
                <ProductItem key={index} product={product} handler={props.handler}/>
                
            ))}
            <p>hej</p>
        </CartItemDiv>
    )
}

export default CartItem

