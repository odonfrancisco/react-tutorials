import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit() {
    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-button-container">
                {/* html entity for X. 
                better than using your font's X */}
                <button className="btn recipe-edit__remove-button">
                    &times;
                </button>
            </div>
            {/* grid div */}
            <div className="recipe-edit__details-grid">
                <label 
                    htmlFor="name" 
                    className="recipe-edit__label"
                >
                    Name
                </label>
                <input type="text" 
                    name="name"
                    id="name"
                    className="recipe-edit__input"
                />
                <label 
                    htmlFor="cookTime"
                    className="recipe-edit__label"
                >
                    Cook Time
                </label>
                <input type="text" 
                    name="cookTime"
                    id="cookTime"
                    className="recipe-edit__input"
                />
                <label 
                    htmlFor="servings"
                    className="recipe-edit__label"
                >
                    Servings
                </label>
                <input type="number" 
                    min="1"
                    name="servings"
                    id="servings"
                    className="recipe-edit__input"
                />
                <label 
                    htmlFor="instructions"
                    className="recipe-edit__label" 
                >
                    Instructions
                </label>
                <textarea 
                    name ="instructions"
                    className="recipe-edit__input"
                    id="instructions"/>
            </div>
            <br/>
            <label className="recipe-edit__label">Ingredients</label>
            {/* Instead of creating a component for the entire 
            ingredients list component, he believes it's better 
            to create a component for each ingredient item */}
            <div className="recipe-edit__ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                <RecipeIngredientEdit/>
                <RecipeIngredientEdit/>
            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button className="btn btn--primary">Add Ingredient</button>
            </div>
            
        </div>
    )
}