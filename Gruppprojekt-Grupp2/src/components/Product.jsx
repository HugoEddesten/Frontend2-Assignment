import styled from "styled-components"
import React from "react"
import Temporary2 from '../assets/Temporary2.webp'
import Temporary1 from '../assets/Temporary1.webp'

const ProductDiv = styled.a`
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

const ProductImg = styled.img`
    width: 10em;
    height: 10em;
`

const ProductText = styled.p`
    margin: 0.1em;
    color: rgb(211, 211, 211);

`



function Product({name, price, imgName}) {
    
    return (
        <ProductDiv>
            <ProductImg src={imgName}/>
            <ProductText>{name}</ProductText>
            <ProductText>{price} SEK</ProductText>
        </ProductDiv>
    )
}

export default Product