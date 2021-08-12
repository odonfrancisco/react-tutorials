import React, {useState, useEffect} from 'react';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';

export const RecipeContext = React.createContext();
/* Good practice is to preface the name with the name 
of your application, so that when you're in your dev tools
looking at all the local storage keys, this one becomes
easy to distinguish */
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, [])

  useEffect(() => {
    /* localStorage.setItem only takes in string, therefore
    must convert js array to a string */
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
    /* If you have a return value inside useEffect
    with a dependency, then this ruturn will be called
    everytime this hook is re-called. not the first time it's called */
    // return () => console.log('recipes set'); 
  }, [recipes])
  
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }
  
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

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes}/>
      <RecipeEdit />
    </RecipeContext.Provider>
  )
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
