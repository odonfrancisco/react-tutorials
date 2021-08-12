import React, {useState, useEffect} from 'react';
import RecipeList from './recipe/RecipeList';
import RecipeEdit from './recipe/RecipeEdit';
import { v4 as uuidv4 } from 'uuid';
import '../css/app.css';

export const RecipeContext = React.createContext();
/* Good practice is to preface the name with the name 
of your application, so that when you're in your dev tools
looking at all the local storage keys, this one becomes
easy to distinguish */
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(
    recipe => recipe.id === selectedRecipeId
  );

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
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }
  
  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  /* He uses handle as function prefix to distinguish
  functions called by clicking a button */
  function handleRecipeAdd() {
    // Filled with buncha fillers for now. will make reactive
    const newRecipe = {
      // a library to generate ID-hashes
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      cookTime: '',
      instructions: '',
      ingredients: [
        { id: uuidv4(), name: '', amount: ''}
      ],
      authors: [
        ''
      ]
    }

    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeChange(id, recipe) {
    /* cannot change state of your recipes without using setRecipes
    therefore we create a duplicate array that we can manipulate
    to then save to recipes state array */
    const newRecipes = [...recipes];
    // console.log("APPJS FILTERED");
    // console.log(newRecipes.filter(e => e.name.length > 0));
    const index = newRecipes.findIndex(r => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function handleRecipeDelete(id) {
    if(selectedRecipeId !== null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes}/>
      {/* So apparently this code will evaluate if a 
      selectedRecipe exists, and if it does, the code will
      evaluate the next thing after the && and it'll return second part */}
      {/* So if selectedRecipe is undefined, the code will immediately
      stop running since undefined && literally anything else will
      equate to undefined */}
      {/* Same as doing a ternary as below */}
      {/* {selectedRecipe ? <chreast/> : null} */}
      {/* Both syntaxes are the same, but the one below is cleaner 
      & more common */}
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
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
    ],
    authors: [
      'Stephen',
      'Arthur'
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
    ],
    authors: [
      'Henry',
      'Catire'
    ]
  },
]

export default App;
