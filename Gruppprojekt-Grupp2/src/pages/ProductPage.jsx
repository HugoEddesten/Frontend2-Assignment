import styled from "styled-components"
import ProductList from "../components/ProductList"
import Temporary2 from '../assets/Temporary2.webp'
import Temporary1 from '../assets/Temporary1.webp'
import React, {useEffect, useState} from 'react'
import Filter from "../components/Filter" 
import ProductSection from "../components/ProductSection"
import GetDB from "../services/FileService"
import axios from "axios"



export const items = [
    {name: "Massa material", price: 79, materials: ["Akryl", "Ull", "Alpacka", "Polyester"], imgName: Temporary1},
    {name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2},
    {name: "Bomull Kit", price: 79, materials: ["Bomull"], imgName: Temporary1},
    {name: "Alpacka Tunn Kit", price: 59, materials: ["Alpacka"], imgName: Temporary2},
    {name: "Bomull Kit", price: 79, materials: ["Bomull"], imgName: Temporary1},
    {name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2},
    {name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2},
    {name: "Bomull Kit", price: 79, materials: ["Bomull"], imgName: Temporary1},
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
    {name: "Bomull, Ull Kit", price: 79, materials: ["Bomull", "Ull"], imgName: Temporary1},
    {name: "Bomull Kit", price: 79, materials: ["Bomull"], imgName: Temporary1},
    {name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2},
    {name: "Bomull Kit", price: 79, materials: ["Bomull"], imgName: Temporary1},
    {name: "Alpacka Tunn Kit", price: 59, materials: ["Alpacka"], imgName: Temporary2},
    {name: "Bomull Kit", price: 79, materials: ["Bomull"], imgName: Temporary1},
    {name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2},
    {name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2},
    {name: "Alpacka Tunn Kit", price: 59, materials: ["Alpacka"], imgName: Temporary2},
    {name: "Bomull, Ull, Alpacka Kit", price: 79, materials: ["Bomull", "Ull", "Alpacka"], imgName: Temporary1},
    {name: "Bomull Kit", price: 79, materials: ["Bomull"], imgName: Temporary1},
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
    background-color: white;
    
    padding: 1em;
    width: -moz-fit-content;
    width: fit-content;
`

const Overlay = styled.div`
    display: none;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #202127bc;
    
    z-index: 1;

    &.isVisible {
        display: flex;
    }  
`

function ProductPage() {

    const [products, setProducts] = useState([])
    const [error, setError] = useState(null); 
    
    const [filteredItems, setFilteredItems] = useState(items);
    const [selectedFilters, setSelectedFilters] = useState([]);
    
    const [clickedProduct, setClickedProduct] = useState();
    const [productSectionIsVisible, setProductSectionIsVisible] = useState(false);

    const filters = [];
    items.forEach((item) => {
        item.materials.forEach((material) => {
            if (!filters.includes(material)){
                filters.push(material);
            }
        })
    });


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

    

    const productClicked = (product) => {
        setClickedProduct(product);
        toggleProductSectionVisibility()
    }

    const toggleProductSectionVisibility = () => {
        setProductSectionIsVisible(!productSectionIsVisible);
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

    useEffect(() => {
        axios.get("http://localhost:1300/api/Products?Id=20&populate=*")
            .then(({ data }) => setProducts(data.data))
            .catch((error) => setError(error));
            
    }, []);

    useEffect(() => {
        filterItems();
    }, [selectedFilters])

    
    console.log(products);
    
    

    return (
        <ProductPageDiv>
            <Filter handler={filterButtonClicked} filters={filters} selectedFilters={selectedFilters} />
            <ProductList products={products} handler={productClicked} />

            <ProductSection product={clickedProduct} isVisible={productSectionIsVisible} />
            <Overlay onClick={() => toggleProductSectionVisibility()} className={productSectionIsVisible ? "isVisible" : ""}/>
        </ProductPageDiv>


    );
    
}
 
export default ProductPage;
