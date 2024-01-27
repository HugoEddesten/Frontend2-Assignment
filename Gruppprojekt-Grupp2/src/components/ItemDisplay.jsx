import HorizontalProductList from "./HorizontalProductList"
import styled from "styled-components"

const ItemDisplayDiv = styled.div`
    background-color: rgb(195, 183, 216);
    margin-left: 5em;
    margin-right: 5em;
    margin-top: 3em;
    border-radius: 0.5em;
    h2 {
        padding-top: 1em;
        padding-left: 2em;
    }
`



const ItemDisplay = ({ items, text }) => {
    return (
        <ItemDisplayDiv>
            <h2>{text}</h2>
            <HorizontalProductList products={items} />
        </ItemDisplayDiv>
    )
}

export default ItemDisplay