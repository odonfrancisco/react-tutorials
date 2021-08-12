import React, { useState, useEffect } from 'react'

export default function SearchBar({ recipes, handleSearch }) {
    const [filter, setFilter] = useState();

    useEffect(() => {
        setFilter('');
    }, [recipes])

    function filterRecipes(input) {
        setFilter(input);
        const recipeList = [...recipes];
        const filteredRecipeList = recipeList
            .filter(r => (
                r.name.toLowerCase()
                    .includes(input.toLowerCase())
            ))
        handleSearch(filteredRecipeList);
    }    

    return (
        <div className="search-bar__container">
            <h5 className="search-bar__title">Fiter Recipes</h5>
            <input 
                className="search-bar__input"
                type="text"
                value={filter}
                onChange={e => filterRecipes(e.target.value)}
            />
        </div>
    )
}
