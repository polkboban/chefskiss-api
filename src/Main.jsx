import { useEffect, useRef, useState } from "react"
import ClaudeRecipe from "./components/ClaudeRecipe"
import IngredientsList from "./components/IngredientsList"
import { getRecipeFromMistral } from "./ai"

export default function Main(){

    const [ingredients, setIngredients]=useState([
        "eggs",
        "flour",
        "sugar",
        "butter",
    ])

    const [recipe, setRecipe] = useState("")

    const recipeSection = useRef(null)


    useEffect(()=>{
        if (recipe!== "" && recipeSection.current!==null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }

    },[recipe])

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
                    ref={recipeSection}
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