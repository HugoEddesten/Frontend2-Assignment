import { useEffect, useState } from "react"
import styled from "styled-components"
import GetDB from "../services/FileService"
import axios from "axios"

const CategoryPickerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding: 4rem;
    padding-top: 2rem;
    background-color: #b6b6b6;
    
`

const CategoryButton = styled.button`
    border: none;
    border-radius: .33rem;
    padding: 1em;
    margin: 2rem 0 0 3rem;
    cursor: pointer;

    &:hover {
        background-color: #dddddd;
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
            <CategoryHeader >Våra produkter</CategoryHeader>
            <div>
                {categories.map((category, index) => (
                    <CategoryButton key={index}>{category.attributes.title}</CategoryButton>
                ))}
            </div>
            


        </CategoryPickerDiv>
    )
    

}

export default CategoryPicker