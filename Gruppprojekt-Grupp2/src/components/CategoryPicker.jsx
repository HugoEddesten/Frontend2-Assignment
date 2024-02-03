import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import filterButtonClicked from "../pages/ProductPage"

const CategoryPickerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding: 4rem;
    padding-top: 2rem;
    background-color: #b6b6b6;  
    gap: 1em;
    
`

const CategoryButton = styled.a`
    border: none;
    text-decoration: none;
    color: #000000;
    background-color: #f0f0f0;
    border-radius: .33rem;
    padding: 1em;
    margin: 2rem 0 0 3rem;
    cursor: pointer;

    &:hover {
        background-color: #cfcfcf;
        transition: .2s;
    }

    &:active {
        background-color: black;
        color: white;
    }

`

const CategoryHeader = styled.h2`

`

const CategoryPicker = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:1300/api/Categories")
            .then(({ data }) => setCategories(data.data))
            .catch((error) => setError(error));
    }, []);



    return (
        <CategoryPickerDiv>
            <CategoryHeader>Våra produkter</CategoryHeader>
            <div>
                {categories.map((category, index) => (
                    <CategoryButton key={index} href={'/ProductPage/' + category.attributes.title}>{category.attributes.title}</CategoryButton>
                ))}
            </div>
            


        </CategoryPickerDiv>
    )


}

export default CategoryPicker