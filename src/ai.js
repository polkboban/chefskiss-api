import { HfInference } from "@huggingface/inference"

const SYSTEM_PROMPT = `you are an assistant that receives list of ingredients that a
user has and suggests a recipe they could make with all the ingredients.`

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr){
    const ingredientsString = ingredientsArr.join(", ")
    try{
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                {role: "system", content: SYSTEM_PROMPT},
                {role: "user", content: `I have ${ingredientsString}. please give me a recipe`}

            ],
            max_tokens: 1024
        })
        return response.choices[0].message.content
    }
    catch(err){
        console.error(err.message)
    }
}