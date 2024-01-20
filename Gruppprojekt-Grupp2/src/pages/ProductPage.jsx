import styled from "styled-components"
import Products from "../components/ProductList"
import Temporary2 from '../assets/Temporary2.webp'
import Temporary1 from '../assets/Temporary1.webp'
import React, {useEffect, useState} from 'react'
import Filter from "../components/Filter" 
import ProductSection from "../components/ProductSection"

export const items = [
    {name: "Bomull, Ull Kit", price: 79, materials: ["Bomull", "Ull"], imgName: Temporary1},
    {name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2},
    {name: "Bomull Kit", price: 79, materials: ["Bomull"], imgName: Temporary1},
    {name: "Alpacka Tunn Kit", price: 59, materials: ["Alpacka"], imgName: Temporary2},
    {name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2},
    {name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2},
    {name: "Alpacka Tunn Kit", price: 59, materials: ["Alpacka"], imgName: Temporary2},
    {name: "Bomull, Ull, Alpacka Kit", price: 79, materials: ["Bomull", "Ull", "Alpacka"], imgName: Temporary1},
    {name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2},
    {name: "Alpacka Tunn Kit", price: 59, materials: ["Alpacka"], imgName: Temporary2},
    {name: "Ull, Alpacka Tunn Kit", price: 99, materials: ["Ull", "Alpacka"], imgName: Temporary2},
    {name: "Bomull, Ull Kit", price: 79, materials: ["Bomull", "Ull"], imgName: Temporary1},
    {name: "Bomull Kit", price: 79, materials: ["Bomull"], imgName: Temporary1},
    {name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2},
    {name: "Alpacka, Ull Tunn Kit", price: 59, materials: ["Alpacka", "Ull"], imgName: Temporary2},
    {name: "Alpacka Tunn Kit", price: 59, materials: ["Alpacka"], imgName: Temporary2},
]


const ProductPageDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgb(30, 29, 32);
    
    height: fit-content;
    padding: 1em;
    width: fit-content;
`






function ProductPage() {
    const [filteredItems, setFilteredItems] = useState(items);
    const filters = []
     items.forEach((item) => {
        item.materials.forEach((material) => {
            if (!filters.includes(material)){
                filters.push(material);
            }
        })
    });

    console.log(filters);
    let [selectedFilters, setSelectedFilters] = useState([]);
    
    const filterButtonClicked = (category) => {
        
    
        if (selectedFilters.includes(category)){
            
            let tempFilters = selectedFilters.filter((filter) => {
                return filter !== category  
            });
            setSelectedFilters(tempFilters);
            
            
        } else {
            setSelectedFilters([...selectedFilters, category]);
            
        } 
    }

    useEffect(() => {
        filterItems();
        //console.log(selectedFilters); 
    }, [selectedFilters])
    

    const productClicked = (name) => {
        console.log(name);
    }

    const filterItems = () => {
        if (selectedFilters.length > 0) {
            setFilteredItems(items.filter((product) => {
                let isIncluded = false;
                product.materials.forEach((material) => {
                    if (selectedFilters.includes(material)){
                        isIncluded = true;
                    }
                })
                return isIncluded
                

            }))
        } else {
            setFilteredItems(items);
        }
    }
    
    return (
        <ProductPageDiv>
            <Filter handler={filterButtonClicked} filters={filters} selectedFilters={selectedFilters}/>
            <Products products={filteredItems} handler={productClicked} />

            
        </ProductPageDiv>

    );
    
}
 
export default ProductPage;
