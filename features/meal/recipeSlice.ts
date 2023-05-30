import useApi from "@/hooks/useApi";
import { Recipe } from "@/types/api";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IState {
    recipes: Recipe[];
    isLoading: boolean;
    error: string | null
}
const initialState: IState = {
    recipes: [],
    isLoading: false,
    error: null
};

export const searchIngrident = createAsyncThunk<Recipe[], string>(
    'recipe/search',
    async (param: string) => {
        const { recipe } = useApi()
        const { data } = await recipe.searchByIngredient(param)
        return data
    }
)

const recipeSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {
        addMeals(state: IState, action: PayloadAction<Recipe[]>) {
            state.recipes = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(searchIngrident.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(searchIngrident.fulfilled, (state, action) => {
            state.isLoading = false
            state.recipes = action.payload
        })

        builder.addCase(searchIngrident.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message as string
        })
    },
});

export const { addMeals } = recipeSlice.actions
export default recipeSlice.reducer
