/* eslint-disable no-unused-vars */
import styled from "styled-components"

const ProductSectionDiv = styled.div`
    display: none;
    user-select: none;
    flex-direction: column;
    
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;

    background-color: #a4a6c2;
    border: solid #18181b;
    border-right: none;
    padding: 1rem;
 
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
    }
`

const ProductSectionImg = styled.img`
    width: 20em;
    height: 20em;

    background-color: #d3d5ed;
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