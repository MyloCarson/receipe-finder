import { RecipeInformation } from "@/types/api";
import axios from "axios";
import { GetServerSideProps } from "next";
import Information from "@/components/Recipe/Information"

type Params = {
    id: string;
};

type IProp = {
    recipe: RecipeInformation
}

  
export default function DetailsPage ({ recipe }: IProp) {

    return (
        recipe ? (
            <Information recipe={recipe}  />
        ) : (
            <h2 className="text-4xl">Recipe not found</h2>
        )
    )
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ params }) => {   
    const { id } = params as Params;
    
    try {
        const res = await axios.get<RecipeInformation>(`${process.env.NEXT_PUBLIC_BASE_URL}/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`)
        return {
            props: { recipe: res.data },
        };
    }
    catch (e) {
        console.log('error', e)
    }
    

    // Pass data to the page via props
    return { props: {  } };
  }