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
    margin: 0 2rem;
    background-color: #F0F0F0;
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
                    <ItemDisplay text="Spring Sale" filterURL="Products?filters[categories][title][$eq]=Till%20salu!&populate=*"/>
                </ItemDisplayDiv>

                <CategoryPickerDiv>
                    <CategoryPicker />
                </CategoryPickerDiv>

                <TextDiv>
                    <HomePageContent>
                        <h2>Super Yarn Store</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ex, quibusdam repudiandae, velit impedit quam et ad quia, vel incidunt nobis sequi sunt nostrum quo hic iure ratione eaque deserunt?
                            Enim dolorem a deleniti facere, officiis ducimus, quod architecto officia veritatis odio alias libero magni non facilis minus totam explicabo? Exercitationem vitae placeat recusandae doloremque praesentium et itaque deserunt tempora?
                            Repellat vel recusandae magnam nisi beatae, nulla culpa dolorum facere obcaecati voluptatem laborum quo necessitatibus, dolor fugiat exercitationem ullam iusto cum assumenda. Sint dolorum odit impedit quod praesentium! Cupiditate, incidunt.</p>
                    </HomePageContent>
                    <HomePageContent>
                        <h2>Super Yarn Company</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ex, quibusdam repudiandae, velit impedit quam et ad quia, vel incidunt nobis sequi sunt nostrum quo hic iure ratione eaque deserunt?
                            Enim dolorem a deleniti facere, officiis ducimus, quod architecto officia veritatis odio alias libero magni non facilis minus totam explicabo? Exercitationem vitae placeat recusandae doloremque praesentium et itaque deserunt tempora?
                            Repellat vel recusandae magnam nisi beatae, nulla culpa dolorum facere obcaecati voluptatem laborum quo necessitatibus, dolor fugiat exercitationem ullam iusto cum assumenda. Sint dolorum odit impedit quod praesentium! Cupiditate, incidunt.</p>
                    </HomePageContent>
                </TextDiv>
                
            </HomePageDiv>
            
            
        </div>

    )
}

export default Home