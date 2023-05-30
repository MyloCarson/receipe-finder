import recipeReducer from "@/features/meal/recipeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
        recipe: recipeReducer
    }
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types


export default store;
