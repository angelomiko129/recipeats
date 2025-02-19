import { useEffect, useState } from "react";
import Marquee from "./ui/marquee";
import { MagicCard } from "./ui/magic-card";
import { fetchRecipes } from "@/api";

const Card = ({ recipes, reverse }) => {
  return (
    <Marquee
      pauseOnHover
      className="[--duration:20s]"
      reverse={reverse}
      repeat={5}
    >
      <div className="flex gap-4 rounded-xl border-[1px] p-4 shadow-inner md:shadow-sm">
        {recipes.map((recipe) => (
          <MagicCard key={recipe._id}>
            <img
              src={`${import.meta.env.VITE_IMAGE_HOST}/uploads/${recipe.image}`}
              alt={recipe.title}
              className="max-w-md object-cover"
            />
            <p>{recipe.title}</p>
          </MagicCard>
        ))}
      </div>
    </Marquee>
  );
};

export const Gallery = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const { data } = await fetchRecipes();
        setRecipes(data.recipes.slice(0, 5));
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    loadRecipes();
  }, []);

  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <Card recipes={recipes} />
      <Card recipes={recipes} reverse={true} />
    </div>
  );
};
