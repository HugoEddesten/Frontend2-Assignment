import styled from "styled-components";
import Product from "./Product"
import React from 'react';

const ProductList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: rgb(30, 29, 32);
    grid-gap: 1em;
    min-width: 100%;
`


function Products({ products }) {

    

    return (
        <ProductList>
            {
            products.map((product, index) => (
                <Product key={index} name={product.name} price={product.price} material={product.material} imgName={product.imgName}/>
            ))}
        </ProductList>
    )
}

export default Products