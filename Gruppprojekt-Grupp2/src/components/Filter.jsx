import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const FilterDiv = styled.div`
    border: solid 1px;
    border-color: rgb(53, 53, 53);
    background-color: rgb(86, 86, 99);
    color: rgb(15, 15, 15);
    min-width: 10em;
    

`

const FilterButton = styled.button `
    border: none;
    padding: 0.2em;
    margin: 1px;

    &.buttonActive {
        background-color: black;
        color: white;
       
    }
`


const Filter = (props) => {
    return (
        <FilterDiv>
            <h3>Material</h3>
            {props.filters.map((category, index) => (
                <FilterButton
                    key={`filters-${index}`} 
                    onClick={() => props.handler(category)}
                    className={props.selectedFilters?.includes(category) ? "buttonActive" : ""}
                >   
                    {category}
                    
                </FilterButton>
            ))}
            <h3>Price</h3>

            

            <h3>Color</h3>
            <FilterButton>Blue</FilterButton>
            <FilterButton>Red</FilterButton>
            <FilterButton>White</FilterButton>
            <FilterButton>Black</FilterButton>
        </FilterDiv>
    )
    
}

export default Filter