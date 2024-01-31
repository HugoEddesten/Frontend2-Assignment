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

const ItemDisplay = ({ text, filterURL }) => {

    const [products, setProducts] = useState([])
    const [error, setError] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:1337/api/${filterURL}`)
            .then(({ data }) => setProducts(data.data))
            .catch((error) => setError(error));
            
    }, []);


    return (
        <ItemDisplayDiv>
            <h2>{text}</h2>
            <HorizontalProductList products={products} />
        </ItemDisplayDiv>
    )
}

export default ItemDisplay