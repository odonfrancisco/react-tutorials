import React, { useContext } from 'react'
import IngredientList from './ingredient/IngredientList';
import { RecipeContext } from '../App';
import AuthorList from './author/AuthorList';

export default function Recipe(props) {
    const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);
    const {
        id,
        name,
        cookTime,
        servings,
        instructions,
        ingredients,
        authors,
        // Better to use context instead for handleRecipeDelete
        // handleRecipeDelete
    } = props;

    /* code runs when component is dismounted. good for
    deleting event listeners that were established */
    // useEffect(() => {
    //     console.log('Rendered in Recipe.js');
    //     return () => {
    //         console.log('Unmount Recipe.js');
    //     }
    // }, [])

    return (
        <div className="recipe">
            {/* Header section */}
            <div className="recipe__header">
                <h3 className="recipe__title">{name}</h3>
                <div>
                    <button 
                        className="btn btn--primary mr-1"
                        onClick={() => handleRecipeSelect(id)   }
                    >
                        Edit
                    </button>
                    <button 
                        className="btn btn--danger"
                        onClick={() => {
                            handleRecipeDelete(id)
                        }}
                    >
                            Delete
                    </button>
                </div>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Cook Time: </span>
                <span className="recipe__value">{cookTime}</span>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Servings: </span>
                <span className="recipe__value">{servings}</span>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Instructions: </span>
                <div className="recipe__value recipe__instructions 
                    recipe__value--indented">{instructions}</div>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Ingredients: </span>
                <div className="recipe__value recipe__value--indented">
                    <IngredientList ingredients={ingredients}/>
                </div>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Authors: </span>
                <div className="recipe__value recipe__value--indented">
                    <AuthorList authors={authors}/>
                </div>
            </div>
            
        </div>
    )
}
