import { Recipe } from "@/types/api"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface IProps {
    recipe: Recipe
}

const Item = (props: IProps) => {
    const { recipe } = props

    const namesOfIngridents = React.useMemo(() => {
        return recipe.usedIngredients.reduce((acc: string[], recipe) => {
            return [...acc, recipe.originalName]
        }, []).join(", ")

    }, [recipe])
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 shadow-md rounded-md overflow-hidden flex flex-col"   >
            <div className="relative h-40 md:h-48 w-full">
                <Image src={recipe.image} alt={recipe.title} className="object-cover" fill  /> 
            </div>
            <div className="px-4 py-4">
                <h2 className="font-medium text-base">{recipe.title}</h2>
                <p className="text-sm italic mt-2">{namesOfIngridents ? `Made with ${namesOfIngridents}` : 'Description not available' }</p>
            </div>
            <Link aria-label="click to view"  href={`/${recipe.id}`} className="mt-auto flex flex-row justify-end items-center mb-2 pr-4">
                <>
                <span className="text-sm">View</span>
                <span className=" w-8 h-8">
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Arrow / Arrow_Right_SM">
                    <path id="Vector" d="M7 12H17M17 12L13 8M17 12L13 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </svg>
                </span>
                </>
            </Link>
        </div>
    )
}

export default Item