import styled from "styled-components";
import ProductItem from "./ProductItem"
import React from 'react';


const ProductList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: rgb(156, 150, 168);
    grid-gap: 1em;
    padding-left: 1em;
    width: -moz-fit-content;
    width: fit-content;
    max-width: 90%;
`


function Products(props) {
    
    return (
        <ProductList>
            {props.products.map((product, index) => (
                <ProductItem key={index} product={product} handler={props.handler}/>
            ))}
        </ProductList>
    )
}

export default Products