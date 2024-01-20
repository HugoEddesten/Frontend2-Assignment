import React, {useEffect, useState} from 'react';


function Filter(props) {
    return (
        <div className={styles.filterDiv}>
            <h3>Material</h3>
            {props.filters.map((category, index) => (
                <button 
                    className={styles.button}
                    key={`filters-${index}`} 
                    onClick={() => props.handler(category)}
                    >
                    {category}
                    
                </button>
            ))}
            <h3>Price</h3>

            

            <h3>Color</h3>
            <button>Blue</button>
            <button>Red</button>
            <button>White</button>
            <button>Black</button>
        </div>
    )
    
}

export default Filter