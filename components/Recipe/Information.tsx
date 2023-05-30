import { RecipeInformation } from "@/types/api"
import Image from "next/image"

type IProps = {
    recipe: RecipeInformation
}
const RecipeInformation = (props: IProps) => {
    const { recipe } = props
    const instructions = recipe.analyzedInstructions
    return (
        <main className="pb-8 text-sm md:text-base">
            <section className="relative" aria-labelledby="title">
                <div className="relative w-full h-32 md:h-56 grayscale">
                    <Image src={recipe.image} alt={recipe.title} className="object-cover" fill />
                </div>
                <div className="absolute top-10 w-full">
                    <h2 id="title" className=" max-w-lg mx-auto text-center text-xl md:text-4xl font-semibold text-white underline"> {recipe.title}</h2>
                </div>
            </section>
            <div className="space-y-4">
                <p className="mt-6" dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>

                <section className="" aria-labelledby="dietType">
                    <h3 id="dietType" className="font-semibold">Diet Type</h3>
                    <p>{recipe.diets.join(', ')}</p>
                </section>

                <section aria-labelledby="ingredients">
                    <h3 id="ingredients" className="font-semibold">Ingredinets</h3>

                    <ul className="list-decimal list-inside">
                        {
                            recipe.extendedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>
                                    {ingredient.nameClean}
                                </li>
                            ))
                        }
                    </ul>
                </section>


                <section aria-labelledby="instructions">
                    <h3 id="instructions" className="font-semibold">Instruction</h3>
                    <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
                </section>

                <section aria-labelledby="steps">
                    <h3 id="steps" className="font-semibold">Detailed Steps</h3>
                    {
                        instructions.map((instruction, index) => (
                            <ul className="list-decimal list-inside" key={index}>
                                {instruction.steps.map((step) => (
                                    <li key={step.number}>
                                        {step.step}
                                    </li>
                                ))}
                            </ul>
                        ))
                    }
                </section>


            </div>
        </main>
    )
}

export default RecipeInformation