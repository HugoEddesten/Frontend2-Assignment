import styled from "styled-components"
import React from "react"


const ProductItemDiv = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    border: solid 1px;
    border-color: rgb(53, 53, 53);
    background-color: #60606c;
    position: relative;
    -webkit-user-select: none;
    user-select: none;


    &:hover {
        transition: all 0.2s;
        border-color: rgb(109, 109, 109);
        cursor: pointer;
        transform: scale(1.01);
    }
`

const ProductItemImg = styled.img`
    
    width: 15em;
    height: auto;
`

const ProductItemText = styled.p`
    display: flex;
    align-items: end;
    max-height: 2em;
    margin: 0.1em;
    color: rgb(211, 211, 211);

`



function ProductItem({product, handler}) {

    return (
        <ProductItemDiv onClick={() => handler(product)}>
            <ProductItemImg src={product.imgName}/>
            <ProductItemText>{product.name}</ProductItemText>
            <ProductItemText>{product.price} SEK</ProductItemText>
        </ProductItemDiv>
    )
}

export default ProductItem