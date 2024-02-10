import styled from "styled-components"
import ProductList from "../components/ProductList"
import React, {useEffect, useState} from 'react'
import Filter from "../components/Filter" 
import ProductSection from "../components/ProductSection"
import axios from "axios"
import { Route, Routes, useParams } from "react-router-dom"
import CategoryPicker from "../components/CategoryPicker"

const ProductPageDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    justify-content: center;
    
    padding: 1em;
    width: -moz-fit-content;
    width: fit-content;
    @media only screen and (max-width: 600px) {
        
        flex-direction: column;
        transition: all 0.4s;
    }
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

    const param = useParams();

    const [products, setProducts] = useState([]);
    const [productsError, setProductsError] = useState(null); 

    const [categories, setCategories] = useState([]);
    const [categoryError, setCategoryError] = useState(null); 
    
    const [clickedProduct, setClickedProduct] = useState();
    const [productSectionIsVisible, setProductSectionIsVisible] = useState(false);


    const productClicked = (product) => {
        setClickedProduct(product);
        toggleProductSectionVisibility()
    }

    const toggleProductSectionVisibility = () => {
        setProductSectionIsVisible(!productSectionIsVisible);
    }

    const getCategoryUrl = () => {
        let selectedCategories = [];
        if (param.category != null) {
            selectedCategories = param.category.split("&");
        } else {
            selectedCategories = categories.map((category) => category.attributes.title);
        }
        let filtersList = selectedCategories.map((category) => `filters[categories][title][$eq]=${category}`)
        let filterString = filtersList.join("&")
        return filterString
    }

    useEffect(() => {
        const filterString = getCategoryUrl();

        axios.get(`http://localhost:1300/api/Products?${filterString}&populate=*`)
            .then(({ data }) => setProducts(data.data))
            .catch((error) => setProductsError(error));
    }, [param])

    useEffect(() => {
        axios.get("http://localhost:1300/api/Categories?populate=*")
        .then(({data}) => setCategories(data.data)).then()
        .catch(({error}) => setCategoryError(error))
    }, [])
    
  
    

    return (
        <div>
            <CategoryPicker />
            <ProductPageDiv>

                <Filter />
                <ProductList products={products} handler={productClicked}/>
                

                <ProductSection product={clickedProduct} isVisible={productSectionIsVisible} />
                <Overlay onClick={() => toggleProductSectionVisibility()} className={productSectionIsVisible ? "isVisible" : ""}/>
            </ProductPageDiv>
        </div>

    );
    
}
 
export default ProductPage;
