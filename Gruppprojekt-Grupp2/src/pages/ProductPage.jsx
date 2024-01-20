import styled from "styled-components"
import Products from "../components/ProductList"
import Temporary2 from '../assets/Temporary2.webp'
import Temporary1 from '../assets/Temporary1.webp'
import React, {useEffect, useState} from 'react'
import Filter from "../components/Filter" 

export const items = [
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
    {name: "Bomull Tunn Kit", price: 99, material: "Ull", imgName: Temporary2},
    {name: "Bomull Kit", price: 79, material: "Bomull", imgName: Temporary1},
]


const ProductPageDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgb(30, 29, 32);
    width: 60%;
    height: fit-content;
    padding: 1em;
    width: fit-content;
    height: 100%;
`




function ProductPage() {
    let [selectedFilters, setSelectedFilters]= useState([]);
    
    let [filteredItems, setFilteredItems] = useState(items);
    const filters = [...new Set(items.map((val) => val.material))];
    console.log(filteredItems);
    

    const filterButtonClicked = (category) => {
        filteredItems = items
        
        
        selectedFilters = category;
        setFilteredItems(filteredItems.filter((product) => {
            return selectedFilters.includes(product.material);
        }))
        
    }

    return (
        <ProductPageDiv>
            <Filter handler={filterButtonClicked} filters={filters}/>
            <Products products={filteredItems}/>
        </ProductPageDiv>

    );
    
}
 
export default ProductPage;
