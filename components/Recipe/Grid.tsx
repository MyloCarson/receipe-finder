import store from "@/store";
import { useSelector } from "react-redux";
import GridItem from "./Item"

const ReceipeGrid = () => {
    const recipes = useSelector(
        (state: ReturnType<typeof store.getState>) => state.recipe.recipes
    );


    return (
        <div className="flex flex-col md:grid grid-cols-12 gap-8 py-10">
            {
                recipes.map((recipe) => (
                    <GridItem recipe={recipe} key={recipe.id} />
                ))
            }
        </div>
    )
}

export default ReceipeGrid;