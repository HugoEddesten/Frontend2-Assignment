import styled from "styled-components"

const ProductDiv = styled.a`
    border: solid 1px;
    border-color: rgb(53, 53, 53);
    position: relative;
    -webkit-user-select: none;
    user-select: none;

    &:hover {
        transition: all 0.2s;
        border-color: rgb(109, 109, 109);
        cursor: pointer;
        transform: scale(1.01);
    }
`

const ProductImg = styled.img`
    width: 10em;
    height: 10em;
`

const ProductText = styled.p`
    margin: 0.1em;
    color: rgb(211, 211, 211);

`



function Product({props}) {
    return (
        <ProductDiv>
            <ProductImg src={`../../public/${props.imgName}`}/>
            <ProductText>{props.name}</ProductText>
            <ProductText>{props.price} SEK</ProductText>
        </ProductDiv>
    )
}

export default Product