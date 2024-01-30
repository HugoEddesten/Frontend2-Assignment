import { useEffect, useState } from "react";
import HorizontalProductList from "./HorizontalProductList"
import styled from "styled-components"
import axios from "axios";

const ItemDisplayDiv = styled.div`
    background-color: #F0F0F0;
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

    const [products, setProducts] = useState([])
    const [error, setError] = useState([])


    useEffect(() => {
        axios.get("http://localhost:1300/api/Products?populate=*")
            .then(({ data }) => setProducts(data.data))
            .catch((error) => setError(error));
            
    }, []);


    return (
        <ItemDisplayDiv>
            <h2>{text}</h2>
            <HorizontalProductList products={items} />
        </ItemDisplayDiv>
    )
}

export default ItemDisplay