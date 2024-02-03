import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HiMenuAlt2 } from "react-icons/hi";

const FilterDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: rgb(15, 15, 15);
    min-width: 10em;
    transition: transform 0.6s;
    padding: .5rem;
    
    &.menuButtonActive {
        transform: translateX(-110%);
        transition: transform 0.6s;
    }


    .menuIcon {
        align-self: end;
        font-size: 1.33em;
        border-radius: 0.1rem;
        transition: transform 0.6s;


        &:hover {
            background-color: #dddddd;
            cursor: pointer;
            transition: 0.2s;
        }
        &:active {
            background-color: #F0F0F0;
        }
        &.menuButtonActive {
        transform: translateX(200%) scale(1.5);
        transition: transform 0.6s;
    }
        
    }

`

const FilterButton = styled.button`
    border: none;
    border-radius: .33rem;
    padding: 0.2em;
    margin: .2rem 0;
    cursor: pointer;
    background-color: #f0f0f0;

    &:hover {
        background-color: #dddddd;
        transition: .2s;
    }

    &.buttonActive {
        background-color: black;
        color: white;
    }
    
`


const Filter = (props) => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const toggleMenuButtonActive = () => {
        setMenuIsVisible(!menuIsVisible);
    }


    return (
        <FilterDiv className={menuIsVisible === true ? "menuButtonActive" : ""}>
            <HiMenuAlt2 className={menuIsVisible === true ? "menuButtonActive menuIcon" : "menuIcon"} onClick={() => toggleMenuButtonActive()} />
            <h3>Material</h3>
            {props.filters.map((category, index) => (
                <FilterButton
                    key={`filters-${index}`}
                    onClick={() => props.handler(category)}
                    className={props.selectedFilters.includes(category) ? "buttonActive" : ""}
                >
                    {category.attributes.title}

                </FilterButton>
            ))}
            <h3>Pris</h3>



            <h3>Färg</h3>
            <FilterButton>Blå</FilterButton>
            <FilterButton>Röd</FilterButton>
            <FilterButton>Vit</FilterButton>
            <FilterButton>Svart</FilterButton>
        </FilterDiv>
    )

}

export default Filter