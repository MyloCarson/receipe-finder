import type { AxiosPromise } from "axios";
import HttpFactory from "../HttpFactory";
import type { Recipe } from "@/types/api";

class RecipeRepository extends HttpFactory {
    private RESOURCE = '/recipes'

    async searchByIngredient (ingridient: string): Promise<AxiosPromise<Recipe[]>>{
        return await this.call<Recipe[]>(`${this.RESOURCE}/findByIngredients?ingredients=${ingridient}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`, 'GET')
    }
}

export default RecipeRepository
