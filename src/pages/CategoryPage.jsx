import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@/components/Card";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { fetchRecipesByCategory } from "@/api";

const CategoryPage = () => {
  const navigate = useNavigate();
  // Get category params on url
  const { category } = useParams();
  // State for recipe
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        // Fetchs recipe per category
        const { data } = await fetchRecipesByCategory(category);
        setRecipes(data);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
    };

    loadRecipes();
  }, [category]);

  return (
    <>
      <section className="p-4">
        {/* Back button */}
        <div onClick={() => navigate("/recipes")} className="cursor-pointer">
          <IoArrowBackSharp size={30} />
        </div>
        {/* Category title */}
        <h1 className="mb-4 text-center sm:text-start">
          {category.charAt(0).toUpperCase() + category.slice(1)} Recipes
        </h1>
        {/* Recipe cards */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {recipes.length > 0 ? (
            recipes.map((recipe) => <Card key={recipe._id} recipe={recipe} />)
          ) : (
            <p className="text-center sm:text-start">
              No recipes currently available for this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
