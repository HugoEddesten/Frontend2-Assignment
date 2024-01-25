import HorizontalProductList from "./HorizontalProductList"
import styled from "styled-components"

const ItemDisplayDiv = styled.div`
    background-color: rgb(70, 68, 74);
    margin-left: 5em;
    margin-right: 5em;
    margin-top: 3em;
    border-radius: 1em;
    h2 {
        padding-top: 1em;
        padding-left: 2em;
    }
`



const ItemDisplay = ({ items }) => {
    return (
        <ItemDisplayDiv>
            <h2>Featured Products</h2>
            <HorizontalProductList products={items} />
        </ItemDisplayDiv>
    )
}

export default ItemDisplay