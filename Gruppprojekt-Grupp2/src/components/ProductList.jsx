import styled from "styled-components";
import ProductItem from "./ProductItem"
import React from 'react';

const ProductList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: rgb(30, 29, 32);
    grid-gap: 1em;
    padding-left: 1em;
    max-width: 90%;
`


function Products(props) {
    
    return (
        <ProductList>
            {props.products.map((product, index) => (
                <ProductItem key={index} name={product.name} price={product.price} material={product.material} imgName={product.imgName} handler={props.handler}/>
            ))}
        </ProductList>
    )
}

export default Products