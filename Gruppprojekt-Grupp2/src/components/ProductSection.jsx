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

    background-color: white;
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

const ProductSection = (props) => {
    return (
        <ProductSectionDiv className={props.isVisible ? "isVisible" : "isInvisible"}>
            <ProductSectionImg src={props.product?.imgName}/>
            <ProductSectionHeader>{props.product?.name}</ProductSectionHeader>
            {props.product?.materials.map((material, index) => (
                <ProductSectionParagraph key={index}>{material}</ProductSectionParagraph>
            ))}
            
        
        </ProductSectionDiv>
    )
}   

export default ProductSection