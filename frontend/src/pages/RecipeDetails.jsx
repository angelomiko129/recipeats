import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { fetchRecipe } from "@/api";

const RecipeDetails = () => {
  // get the id params
  const navigate = useNavigate();
  const { id } = useParams();
  // state for recipe details
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    const loadRecipe = async () => {
      try {
        // fetch single recipe
        const { data } = await fetchRecipe(id);
        // set it on state
        setRecipe(data);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };

    loadRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;
  return (
    <>
      <div>
        {/* Back button */}
        <div
          className="cursor-pointer px-4"
          onClick={() => navigate("/recipes")}
        >
          <IoArrowBackSharp size={30}></IoArrowBackSharp>
        </div>

        <div className="grid grid-rows-1 gap-2 p-4 sm:grid-cols-[1fr_2fr] sm:gap-10">
          {/* Left side card  */}
          <div className="rounded-lg border bg-card p-8 text-center">
            <img
              src={`/backend/uploads/${recipe.image}`}
              alt={recipe.title}
              className="h-80 w-full rounded-md object-cover"
            />
            <h1>{recipe.title}</h1>
            <p className="mb-4">
              <strong>Author: </strong> {recipe.author}
            </p>
          </div>

          {/* Right side card  */}
          <div className="mt-4 flex flex-col gap-4 rounded-md border-l bg-card p-8 sm:text-start">
            <h5>
              <strong>Details:</strong>
              <p className="font-medium">{recipe.description}</p>
            </h5>
            <h5>
              <strong>Ingredients:</strong>
              {Array.isArray(recipe.ingredients) ? (
                recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="font-medium">
                    {ingredient}
                  </li>
                ))
              ) : (
                <li>No ingredients available</li>
              )}
            </h5>
            <h5>
              <strong>Category:&nbsp;</strong>
              <span className="font-medium">{recipe.category}</span>
            </h5>
            <h5>
              <strong>Instructions:</strong>
            </h5>
            <ol className="list-decimal pl-6">
              {recipe.instructions &&
                recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
            </ol>
            <h5>
              <strong>Rating:&nbsp;</strong>
              <span className="font-medium">{recipe.rating}⭐</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
