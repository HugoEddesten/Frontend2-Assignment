import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import filterButtonClicked from "../pages/ProductPage"
import "../categoryPicker.css"
import { Link, useParams } from "react-router-dom"

const CategoryPickerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding-bottom: 4rem;
    padding-top: 2rem;
    margin-top: 2rem;
    margin-bottom: .25rem;
    color: white;
    background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
    
    /* background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,0) 50%, rgba(255,0,52,1) 100%); */
    gap: 1em;
    
`


const CategoryHeader = styled.h2`

`

const CategoryPicker = ({ header }) => {

    const param = useParams();

    

    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:1300/api/Categories")
            .then(({ data }) => setCategories(data.data))
            .catch((error) => setError(error));
    }, []);

    return (
        <CategoryPickerDiv>
            <CategoryHeader>{header}</CategoryHeader>
            <div>
                {categories.map((category, index) => (  
                    <Link key={index} className={param.category == category.attributes.title ? "categoryButton buttonActive" : "categoryButton"} to={param.category?.includes(category.attributes.title)? "/ProductPage/" :"/ProductPage/"+category.attributes.title}>{category.attributes.title}</Link>
                ))}
            </div>



        </CategoryPickerDiv>
    )


}

export default CategoryPicker