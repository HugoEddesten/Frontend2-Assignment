import styled from "styled-components"

const ProductSectionDiv = styled.div`
    display: none;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #a4a6c2;
    border: solid #18181b;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
    padding: 4em;
    z-index: 3;

    &.isInvisible {
        display: flex;
        left: 100%;
        transition: all 1s;
        
        
    }

    &.isVisible {
        left: 65%;
        
        display: flex;
        transition: all 1s;
        
        
        
    }

    &:after {
        position: fixed;
    }
`


const ProductSection = (props) => {
    return (
        <ProductSectionDiv className={props.isVisible ? "isVisible" : "isInvisible"}>{props.product?.name}</ProductSectionDiv>
    )
}   

export default ProductSection