import styled from "styled-components"

const categories = [
    {title: "Garn"},
    {title: "Garn"},
    {title: "Garn"},
]

const CategoryPickerDiv = styled.div`
    
`

const CategoryButton = styled.button`


` 

const CategoryPicker = (props) => {

    // Importera categorier från strapi 

    // använd map funktionen för att skapa knappar för alla categorier
    return (
        <CategoryPickerDiv>
            {categories.map((category, index) => (
                <CategoryButton key={index}>{category.title}</CategoryButton>
            ))}
            


        </CategoryPickerDiv>
    )
    

}

export default CategoryPicker