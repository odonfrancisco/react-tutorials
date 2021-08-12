import React, { useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App';

export default function RecipeList({ recipes }) {
    const {handleRecipeAdd} = useContext(RecipeContext);
    // const {
    //     recipes,
    //     handleRecipeAdd,
    //     /* use context instead because delete function
    //     only used by recipe component, so we get rid 
    //     of this intermediary prop */
    //     handleRecipeDelete
    // } = props;

    return (
        <div className="recipe-list">
            <div>
                {
                    recipes.map(recipe => (
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
