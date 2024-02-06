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
    padding: 4rem;
    padding-top: 2rem;
    margin-top: 2rem;
    margin-bottom: .25rem;
    background-color: #d9d9eb;
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

    const addCategoryToUrl = (clickedCategory) => {
        
        if (param.category?.includes(clickedCategory.attributes.title)) {
            let categoryList = param.category.split("&");
            let newCategories = categoryList.filter((category) => clickedCategory =! category);
            let categoryString = newCategories.join("&");
            console.log("string: " + categoryString);
            return "/ProductPage/" + categoryString
        } else {
            
            if (param.category != null) {
                return "/ProductPage/" + param?.category + "&" + clickedCategory.attributes.title
            } else {
                
                return "/ProductPage/" + clickedCategory.attributes.title
            }
        }
    }


    return (
        <CategoryPickerDiv>
            <CategoryHeader>{header}</CategoryHeader>
            <div>
                {categories.map((category, index) => (  
                    <Link key={index} className={param.category == category.attributes.title ? "categoryButton buttonActive" : "categoryButton"} to={addCategoryToUrl(category)}>{category.attributes.title}</Link>
                ))}
            </div>



        </CategoryPickerDiv>
    )


}

export default CategoryPicker