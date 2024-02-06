import { useEffect, useState } from "react";
import HorizontalProductList from "./HorizontalProductList"
import styled from "styled-components"
import axios from "axios";

const ItemDisplayDiv = styled.div`
    background-color: #F0F0F0;

    margin-top: 2rem;
    border-radius: 0.5em;
    max-width: 50vw;
    min-width: 70rem;
    h2 {
        padding-top: 2rem;
    }
`

const ItemDisplay = ({ text, filterURL }) => {

    const [products, setProducts] = useState([])
    const [error, setError] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:1300/api/${filterURL}`)
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