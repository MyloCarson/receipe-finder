import RecipeRepository from "@/services/repository/recipe"
import axios from "axios"

interface ApiInstance {
    recipe: RecipeRepository
}

export default function useApi (): ApiInstance {
    
    const axiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        headers: {
          'Content-Type': 'application/json'
        },
    })

    return  {
        recipe: new RecipeRepository(axiosInstance)
    }
    
}