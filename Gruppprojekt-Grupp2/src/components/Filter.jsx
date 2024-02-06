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




const Filter = (props) => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const toggleMenuButtonActive = () => {
        setMenuIsVisible(!menuIsVisible);
    }


    return (
        <FilterDiv className={menuIsVisible === true ? "menuButtonActive" : ""}>
            <HiMenuAlt2 className={menuIsVisible === true ? "menuButtonActive menuIcon" : "menuIcon"} onClick={() => toggleMenuButtonActive()} />
            <h3>Kategori</h3>
            {props.filters.map((category, index) => (
                <Link 
                    key={`filters-${index}`}
                    
                    to={`/ProductPage/${category.attributes.title}`}
                    onClick={() => props.handler(category)}
                    className={props.selectedFilters.includes(category) ? "filterButton buttonActive" : "filterButton"}
                            >
                    {category.attributes.title}
                </Link>
            ))}
        </FilterDiv>
    )

}

export default Filter