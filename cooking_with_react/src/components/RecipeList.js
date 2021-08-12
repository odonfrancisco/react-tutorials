import React, { useState, useEffect, useContext } from 'react'
import { RecipeContext } from './App';
import Recipe from './Recipe'
import SearchBar from './SearchBar';

export default function RecipeList({ recipes }) {
    const [filteredRecipes, setfilteredRecipes] = useState(recipes)
    const {handleRecipeAdd} = useContext(RecipeContext);

    useEffect(() => {
        setfilteredRecipes(recipes);
    }, [recipes]);

    function handleRecipeQuery(recipeList) {
        setfilteredRecipes(recipeList);
    }

    return (
        <div className="recipe-list">
            <SearchBar 
                recipes={recipes}
                handleSearch={handleRecipeQuery}
            />
            <div>
                {
                    filteredRecipes.map(recipe => (
                        <Recipe key={recipe.id} {...recipe}/>       
                    ))
                }
            </div>
            <div className="recipe-list__add-recipe-btn-container">
                <button 
                    className="btn btn--primary"
                    onClick={handleRecipeAdd}
                >
                    Add Recipe
                </button>
            </div>
        </div>
    )
}
