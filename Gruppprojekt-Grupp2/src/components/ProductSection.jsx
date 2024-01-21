/* eslint-disable no-unused-vars */
import styled from "styled-components"

const ProductSectionDiv = styled.div`
    display: none;
    
    flex-direction: column;
    
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #a4a6c2;
    border: solid #18181b;
    border-right: none;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
    
    
    z-index: 3;
    
    

    &.isInvisible {
        display: flex;

        left: 100%;
        transition: left 0.4s;
        
        
        
    }

    &.isVisible {
        left: 75%;
        
        display: flex;
        transition: left 0.4s;
        
        
        
    }

    &:after {
        position: fixed;
    }
`
const ProductSectionImg = styled.img`

    width: 400px;
    height: 400px;
    
    background-color: #d3d5ed;
    border-radius: 2em;
    
` 

const ProductSectionHeader = styled.h1`
    display: flex;
    white-space: nowrap; 
    
    
`

const ProductSection = (props) => {
    return (
        <ProductSectionDiv className={props.isVisible ? "isVisible" : "isInvisible"}>
        <ProductSectionImg src={props.product?.imgName}/>
        <ProductSectionHeader>{props.product?.name}</ProductSectionHeader>
        
        </ProductSectionDiv>
    )
}   

export default ProductSection