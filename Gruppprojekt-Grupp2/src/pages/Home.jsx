import Temporary2 from '../assets/Temporary2.webp'
import Temporary1 from '../assets/Temporary1.webp'
import ItemDisplay from "../components/ItemDisplay"
import styled from "styled-components"
import CategoryPicker from "../components/CategoryPicker"
import { useState, useEffect } from 'react'
import axios from 'axios'

const HomePageDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
`

const HomePageContent = styled.div`
    margin: 0 2rem;
    background-color: #F0F0F0;
    padding: 1rem;
`

export const items = [
    { name: "Massa material", price: 79, materials: ["Akryl", "Ull", "Alpacka", "Polyester"], imgName: Temporary1 },
    { name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2 },
    { name: "Bomull Kit", price: 79, materials: ["Bomull"], imgName: Temporary1 },
    { name: "Alpacka Tunn Kit", price: 59, materials: ["Alpacka"], imgName: Temporary2 },
    { name: "Bomull Kit", price: 79, materials: ["Bomull"], imgName: Temporary1 },
    { name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2 },
    { name: "Massa material", price: 79, materials: ["Akryl", "Ull", "Alpacka", "Polyester"], imgName: Temporary1 },
    { name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2 },
    { name: "Bomull Kit", price: 79, materials: ["Bomull"], imgName: Temporary1 },
    { name: "Alpacka Tunn Kit", price: 59, materials: ["Alpacka"], imgName: Temporary2 },
    { name: "Bomull Kit", price: 79, materials: ["Bomull"], imgName: Temporary1 },
    { name: "Ull Tunn Kit", price: 99, materials: ["Ull"], imgName: Temporary2 },
]




const Home = () => {
    return (
        <div>
            <ItemDisplay text="Spring Sale" filterURL="Products?filters[categories][title][$eq]=Till%20salu!&populate=*"/>
            <HomePageDiv>
                <HomePageContent>
                    <h2>Super Yarn Store</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ex, quibusdam repudiandae, velit impedit quam et ad quia, vel incidunt nobis sequi sunt nostrum quo hic iure ratione eaque deserunt?
                        Enim dolorem a deleniti facere, officiis ducimus, quod architecto officia veritatis odio alias libero magni non facilis minus totam explicabo? Exercitationem vitae placeat recusandae doloremque praesentium et itaque deserunt tempora?
                        Repellat vel recusandae magnam nisi beatae, nulla culpa dolorum facere obcaecati voluptatem laborum quo necessitatibus, dolor fugiat exercitationem ullam iusto cum assumenda. Sint dolorum odit impedit quod praesentium! Cupiditate, incidunt.</p>
                </HomePageContent>
                
            </HomePageDiv>
            <CategoryPicker />
            
        </div>

    )
}

export default Home