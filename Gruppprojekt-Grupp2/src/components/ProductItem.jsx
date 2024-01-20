import styled from "styled-components"
import React from "react"
import Temporary2 from '../assets/Temporary2.webp'
import Temporary1 from '../assets/Temporary1.webp'

const ProductItemDiv = styled.a`
    border: solid 1px;
    border-color: rgb(53, 53, 53);
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
    height: 15em;
`

const ProductItemText = styled.p`
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