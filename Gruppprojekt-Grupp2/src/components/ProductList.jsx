import styled from "styled-components";
import ProductItem from "./ProductItem"
import React from 'react';


const ProductListDiv = styled.div`
    display: flex;
    
    flex-direction: row;
    
    max-width: max-content;
    flex-wrap: wrap;
    background-color: white;
    grid-gap: 1em;
    padding-left: 1em;
    margin-top: 4em;
    align-self: flex-start;
    
    
`


function ProductList(props) {
    
    return (
        <ProductListDiv>
            {props.products.map((product, index) => (
                <ProductItem key={index} product={product} handler={props.handler}/>
                
            ))}
        </ProductListDiv>
    )
}

export default ProductList