import Temporary2 from '../assets/Temporary2.webp'
import Temporary1 from '../assets/Temporary1.webp'
import ItemDisplay from "../components/ItemDisplay"
import styled from "styled-components"
import CategoryPicker from "../components/CategoryPicker"
import { useState, useEffect } from 'react'
import axios from 'axios'

const HomePageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    gap: 1em;
`

const HomePageContent = styled.div`
    margin: 0 30rem 2rem 30rem;
    background-color: WHITE;
    padding: 1rem;
`

const ItemDisplayDiv = styled.div`

`

const TextDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const CategoryPickerDiv = styled.div`
    width: 100%;

`

const Home = () => {
    return (
        <div>

            <HomePageDiv>

                <ItemDisplayDiv>
                    <ItemDisplay text="Spring Sale" filterURL="Products?filters[categories][title][$eq]=Till salu!&filters[categories][title][$eq]=Garn, garn, garn!&populate=*"/>
                </ItemDisplayDiv>

                <CategoryPickerDiv>
                    <CategoryPicker header="Våra Produkter"/>
                </CategoryPickerDiv>

                <HomePageContent>
                    <h2>Super Yarn Store</h2>
                    <p>
                            Välkommen till Super Yarn Store, en passionerad gemenskap av garnälskare som delar kärleken till kreativitet och handarbete. Grundat i år, 2024, har vi förvandlat vår entusiasm för garn till en digital oas där du kan upptäcka en färgrik värld av möjligheter. 
                    </p>
                </HomePageContent>
            </HomePageDiv>
            
            
        </div>

    )
}

export default Home