import styled from "styled-components"
import React from "react"
import { IoBagAdd } from "react-icons/io5";


const ProductItemDiv = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: end;
    
    border: solid 1px;
    border-color: rgb(53, 53, 53);
    background-color: #60606c;
    position: relative;
    -webkit-user-select: none;
    user-select: none;
    padding-bottom: 0.33rem;


    &:hover {
        transition: all 0.1s;
        
        cursor: pointer;
        transform: scale(1.01);
    }
`

const ProductItemImg = styled.img`
    
    padding-bottom: 0.33rem;
    width: 15em;
    height: auto;
`

const BottomContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

`

const ProductInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;

`

const ProductItemText = styled.p`
    padding-left: 0.33rem;
    display: flex;
    align-items: end;
    max-height: 2em;
    color: rgb(211, 211, 211);

    &:hover {
        &.ProductItemDiv{
            background-color: blue;
        }
    }
    

`

const AddToCartButton = styled.button`
    border: none;
    width: 3em;
    align-self: center;
    color: green;
    border: solid 1px black;
    border-radius: .33rem;
    padding: 0.5rem;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    &:active {
        color: white;
        background-color: green;
    }
`


function ProductItem({product, handler}) {

    const addToCart = (e) => {
        e.stopPropagation();
        console.log(product.name);

       
    }

    return (
        <ProductItemDiv onClick={() => handler(product)}>
            <ProductItemImg src={product.imgName}/>
        <BottomContentDiv>
            <ProductInfoDiv>
                <ProductItemText>{product.name}</ProductItemText>
                <ProductItemText>{product.price} SEK</ProductItemText>
            </ProductInfoDiv>

            <AddToCartButton onClick={(e) => addToCart(e)}><IoBagAdd /></AddToCartButton>
        </BottomContentDiv>
        </ProductItemDiv>
    )
}

export default ProductItem