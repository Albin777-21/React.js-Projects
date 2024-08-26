import React from "react";
import useFetch from "../../components/hooks/use-fetch";

const RecipesList = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
 

  if(loading) return <h2>Fetching recipes</h2>

  return (
    <div>
      <h1>Recipes List</h1>
      <ul>
        {
          data?.recipes?.length>0?
          data?.recipes.map(recipeItem=><div>
            <img src={recipeItem?.image}/>
            <label >{recipeItem.name}</label>
          </div>)
          :null
        }
      </ul>
    </div>
  );
};

export default RecipesList;
