/* eslint-disable no-unused-vars */
import { IoBagAdd } from "react-icons/io5"
import styled from "styled-components"

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



const ProductSection = (props) => {
    const addToCart = (e) => {
        e.stopPropagation();
        console.log(props.product.attributes.title);

       
    }
    
    return (
        <ProductSectionDiv className={props.isVisible ? "isVisible" : "isInvisible"}>
            <ProductSectionImg src={"http://localhost:1337" + props.product?.attributes?.image.data.attributes.url}/>
            <ProductSectionHeader>{props.product?.attributes?.title}</ProductSectionHeader>

            <AddToCartButton onClick={(e) => addToCart(e)}><IoBagAdd /></AddToCartButton>
            <ProductSectionParagraph>{props.product?.attributes.description}</ProductSectionParagraph>
            
        
        </ProductSectionDiv>
    )
}   

export default ProductSection