import styled from "styled-components"
import React, { useContext } from "react"
import { IoBagAdd } from "react-icons/io5";
import { CartContext } from "../App";

const ProductItemDiv = styled.a`
    display: flex;
    flex-direction: column;
    

    border: solid 1px;
    border-color: rgb(53, 53, 53);
    background-color: white;
    position: relative;
    -webkit-user-select: none;
    user-select: none;
    padding-bottom: 0.33rem;
    transition: all 0.4s;

    &:hover {
        transition: all 0.1s;
        
        cursor: pointer;
        /* transform: scale(1.01); */
    }
   
    @media only screen and (max-width: 600px) {
        
        padding: 0;
        margin: 0;
        transition: all 0.4s;
    }
`

const ProductItemImg = styled.img`
    padding-bottom: 0.33rem;
    width: 18rem;
    height: 10rem;
    object-fit: cover;
    transition: all 0.4s;

    @media only screen and (max-width: 600px) {
        width: 12rem;
        height: 15rem;
        padding: 0;
        margin: 0;
        transition: all 0.4s;
    }

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
    margin-top: 0.33rem;
    display: flex;
    align-items: flex-end;
    
    max-height: .67rem;
    color: black;
    font-size: 0.8rem;
    transition: all 0.4s;

    &:hover {
        &.ProductItemDiv{
            background-color: blue;
        }
    }
    
    @media only screen and (max-width: 600px) {
        max-height: 1.98rem;
        transition: all .4s;
    }

`

const AddToCartButton = styled.button`
    border: none;
    width: 3rem;
    color: green;
    border: solid 1px black;
    border-radius: .33rem;
    padding: 0.2rem;
    transition: all 0.4s;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: 0.1s;
        background-color: #dddddd;
    }
    
    &:active {
        color: white;
        background-color: green;
    }
    @media only screen and (max-width: 600px) {
        width: 2rem;
        height: 1rem;
        padding: 0;
        margin: 0;
        transition: all 0.4s;
    }
`


function ProductItem({product, handler}) {
    
    const cartProducts = useContext(CartContext);

    const addToCart = (e) => {
        e.stopPropagation();

        let localStorageCart = localStorage.getItem("cart");
        let cart = [];

        if ( localStorageCart != null ) { 
            let cartJsonToArray = JSON.parse(localStorageCart);
            cartJsonToArray.forEach(localStorageProduct => {
                cart.push(localStorageProduct);
            });   
        }
        cart.push(product);
        let cartJson = JSON.stringify(cart);
        localStorage.setItem("cart", cartJson);
        
        cartProducts.push(product);  
    }

    return (
        <ProductItemDiv onClick={() => handler(product)}>
            <ProductItemImg src={"http://localhost:1300" + product?.attributes?.image.data.attributes.url}/>
            <BottomContentDiv>
                <ProductInfoDiv>
                    <ProductItemText>{product.attributes?.title}</ProductItemText>
                    <ProductItemText>{product.attributes?.price} SEK</ProductItemText>
                    <ProductItemText>{product.attributes?.quantity} st</ProductItemText>
                </ProductInfoDiv>

                <AddToCartButton onClick={(e) => addToCart(e)}><IoBagAdd /></AddToCartButton>
            </BottomContentDiv>
        </ProductItemDiv>
    )
}

export default ProductItem