import styled from "styled-components";
import ProductItem from "./ProductItem"
import React from 'react';


const ProductListDiv = styled.div`
    display: flex;
    flex-direction: row;
   
    

    flex-wrap: wrap;
    background-color: rgb(156, 150, 168);
    grid-gap: 1em;
    padding-left: 1em;
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