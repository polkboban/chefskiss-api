import { useState } from "react"
import ClaudeRecipe from "./components/ClaudeRecipe"
import IngredientsList from "./components/IngredientsList"
import { getRecipeFromMistral } from "./ai"

export default function Main(){

    const [ingredients, setIngredients]=useState([])

    const [recipe, setRecipe] = useState("")

    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }
    
    function addIngredient(formData){
        
        const newIngredient=formData.get("ingredient")
        
        setIngredients( prevSetIngredients => [...prevSetIngredients,newIngredient])

    }

    return(
        <main>
            <form action={addIngredient}>
                <input 
                    type="text"
                    placeholder="e.g. honey"
                    aria-label="Add Ingredient"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>

            {ingredients.length > 0 &&
             <IngredientsList 
                ingredients={ingredients}
                getRecipe={getRecipe}   
            />}
            {recipe && <ClaudeRecipe recipe={recipe} />}
            
        </main>
    )
}