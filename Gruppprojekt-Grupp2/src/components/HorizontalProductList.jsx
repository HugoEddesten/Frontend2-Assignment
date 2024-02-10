/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ProductItem from "./ProductItem"
import React, { useRef } from 'react';


const ProductScrollListDiv = styled.div`
    display: flex;
    align-items: center;
    
    
    max-width: max-content;
    
    
    user-select: none;
    padding: 1em;
   
    z-index: 0;

    @media only screen and (max-width: 600px) {
        max-width: 100%;
    }
`

const ProductsDiv = styled.div`
    scroll-behavior: smooth;
    
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 1;
`

const ProductList = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1em;
`

const GoForwardButton = styled.a`
    position: static;
    height: 30px;
    
    background-color: rgb(221, 221, 221, 0.6);
    border-radius: 2em;
    z-index: 5;

    &:hover {
        transition: all 0.4s;
        cursor: pointer;
        background-color: rgb(221, 221, 221, 1);
    }
`

const GoBackButton = styled.a`
    position: static;
    height: 30px;
    
    background-color: rgb(221, 221, 221, 0.6);
    border-radius: 2em;  
    z-index: 5;  

    &:hover {
        transition: all 0.4s;
        cursor: pointer;
        background-color: rgb(221, 221, 221, 1);
    }
`

const HorizontalProductList = ({ products }) => {
    
    const containerRef = useRef();

    const goForward = () => {
        containerRef.current.scrollLeft += 310;
    };
    
    const goBackward = () => {
        containerRef.current.scrollLeft -= 310;
    };
    //console.log(products);
    return (
        <ProductScrollListDiv>
            <GoBackButton id="backward" onClick={goBackward}>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"/>
                </svg>
            </GoBackButton>

            <ProductsDiv ref={containerRef} id="container">
                <ProductList>
                    {products.map((product, index) => (
                        <ProductItem key={index} product={product}/>
                    ))}
                </ProductList>
            </ProductsDiv>
            
            <GoForwardButton id="forward" onClick={goForward}>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F"/>
                </svg>
            </GoForwardButton>
        </ProductScrollListDiv>
    );
};


export default HorizontalProductList