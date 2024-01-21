import styled from "styled-components"

const ProductSectionDiv = styled.div`
    display: none;
    position: fixed;
    right: 0;
    left: 55%;
    top: 0;
    bottom: 0;
    background-color: #a9aab9;
    padding: 4em;

    &.isVisible {
        display: flex;
        
        
    }
`


const ProductSection = (props) => {
    return (
        <ProductSectionDiv className={props.isVisible ? "isVisible" : "isInvisible"}>{props.product?.name}</ProductSectionDiv>
    )
}   

export default ProductSection