/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { IoBagAdd } from "react-icons/io5"
import styled from "styled-components"
import { CartContext } from "../App";

const ProductSectionDiv = styled.div`
    display: none;
    user-select: none;
    flex-direction: column;
    
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;

    background-color: white;
    padding: 1rem;
    max-width: 30em;

    z-index: 3;

    &.isInvisible {
        display: flex;
        transform: translateX(100%);

        
        transition: all ease 0.4s;
    }

    &.isVisible {
        display: flex;
        transform: translateX(0%);
        
        transition: all ease 0.4s; 
        box-shadow: 3rem 3rem 3rem 3rem;
    }

    @media only screen and (max-width: 600px) {
        max-width: 20em;
    }
`

const ProductSectionImg = styled.img`
    width: 20em;
    height: auto;

    background-color: #d3d5ed;
` 

const ProductSectionHeader = styled.h1`
    display: flex;
    white-space: nowrap; 
`

const ProductSectionParagraph = styled.p`
 
`

const AddToCartButton = styled.button`
    border: none;
    width: 20em;
    align-self: center;
    color: green;
    border: solid 1px black;
    border-radius: .33rem;
    padding: 0.5rem;
    background-color: white;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    &:active {
        color: white;
        background-color: green;
    }
`



const ProductSection = ({product, isVisible}) => {
    
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
    
const renderRowDescription = () => {
    return(
        product?.attributes.rowdescription.map((paragraph, index) => (
            <ProductSectionParagraph key={index}>{paragraph.children[0].text}</ProductSectionParagraph>
        ))
    )
}

const renderDescription = () => {
    return(
        <ProductSectionParagraph>{product?.attributes.description}</ProductSectionParagraph>
    )
}

    return (
        <ProductSectionDiv className={isVisible ? "isVisible" : "isInvisible"}>
            <ProductSectionImg src={"http://localhost:1300" + product?.attributes?.image.data.attributes.url}/>
            <ProductSectionHeader>{product?.attributes?.title}</ProductSectionHeader>

            <AddToCartButton onClick={(e) => addToCart(e)}><IoBagAdd /></AddToCartButton>
            <br/>
            <ProductSectionHeader>Produktstatus:</ProductSectionHeader>
            <ProductSectionParagraph>{product?.attributes?.price + " SEK"}</ProductSectionParagraph>
            <ProductSectionParagraph>{product?.attributes?.quantity + " stycken kvar"}</ProductSectionParagraph>
            <br/>
            <ProductSectionHeader>Beskrivning:</ProductSectionHeader>
            {product?.attributes.rowdescription == null? renderDescription() : renderRowDescription()} 
        </ProductSectionDiv>
    )
}   

export default ProductSection