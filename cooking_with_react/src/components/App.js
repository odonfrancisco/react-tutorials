import React, {useState} from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  
  return (
    <RecipeList recipes={recipes}/>
  )

  /* He uses handle as function prefix to distinguish
  functions called by clicking a button */
  function handleRecipeAdd() {
    // Filled with buncha fillers for now. will make reactive
    const newRecipe = {
      // a library to generate ID-hashes
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 Tbs'}
      ]
    }

    setRecipes([...recipes, newRecipe]);
  }
}

const sampleRecipes= [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: "1:45",
    instructions: "1. Put salt on chicken \n2. Put chicken in oven \n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on pork \n2. Put pork in oven \n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  },
]

export default App;
