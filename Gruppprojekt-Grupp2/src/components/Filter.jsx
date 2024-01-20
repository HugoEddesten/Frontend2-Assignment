import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const FilterDiv = styled.div`
    border: solid 1px;
    border-color: rgb(53, 53, 53);
    background-color: rgb(81, 81, 90);

    min-width: 20%;

`

const FilterButton = styled.button `

`


function Filter(props) {
    return (
        <FilterDiv>
            <h3>Material</h3>
            {props.filters.map((category, index) => (
                <FilterButton
                    key={`filters-${index}`} 
                    onClick={() => props.handler(category)}
                >
                    {category}
                    
                </FilterButton>
            ))}
            <h3>Price</h3>

            

            <h3>Color</h3>
            <button>Blue</button>
            <button>Red</button>
            <button>White</button>
            <button>Black</button>
        </FilterDiv>
    )
    
}

export default Filter