import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholer, handleChange }) => (
    <input 
        className= 'search'
        type= 'search' 
        placeholder= {'placeholder'}
        onChange={handleChange }
       />
)