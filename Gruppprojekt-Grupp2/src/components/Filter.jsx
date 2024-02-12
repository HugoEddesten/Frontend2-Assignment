import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from 'react-router-dom';
import "../filter.css"

const FilterDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: rgb(15, 15, 15);
    min-width: 10em;
    transition: transform 0.6s;
    padding: .5rem;

    .filterButton {
        padding: .33rem;
    }
    
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

        @media only screen and (max-width: 600px) {
            display: none;
        }
        
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
            <h2>Filter</h2>
            <button className='filterButton'>Alfabetisk</button>
            <button className='filterButton'>Billigast Först</button>
            <button className='filterButton'>Dyrast Först</button>

            
            
        </FilterDiv>
    )

}

export default Filter