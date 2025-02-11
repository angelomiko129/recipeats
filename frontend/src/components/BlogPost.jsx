import { FaStar, FaRegHeart, FaRegComment } from "react-icons/fa6";
import { RiShareForwardLine } from "react-icons/ri";
import { formatDistanceToNow } from "date-fns";
import { deleteRecipe } from "@/api";

const BlogPost = ({ recipe, onDelete }) => {
  // Format time
  const formattedTime =
    recipe.createdAt &&
    formatDistanceToNow(new Date(recipe.createdAt), { addSuffix: true });

  // Get currently loggined user
  const loggedInUser = localStorage.getItem("username");

  // Function for deletion of recipe
  const handleDelete = async () => {
    try {
      await deleteRecipe(recipe._id);
      alert("Recipe deleted successfully.");
      onDelete(recipe._id);
    } catch (err) {
      alert("Failed to delete the recipe.");
    }
  };

  return (
    <>
      <main className="rounded-md bg-dark p-4 shadow-md sm:px-32">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <img
              src="/public/images/profiles/anonymous.png"
              alt="user avatar"
              className="size-14 rounded-full"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="font-medium">{recipe.author || "Anonymous"}</p>
                {recipe.author === loggedInUser && (
                  <span className="text-fluid-base text-primary">(You)</span>
                )}
                <span className="text-sm text-gray-500">
                  {formattedTime || ""}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {recipe.tags &&
                  recipe.tags.map((tag, index) => (
                    <span key={index} className="font-medium">
                      #{tag}
                    </span>
                  ))}{" "}
                &#x2022;
                <span>{recipe.category}</span>
              </div>
            </div>
          </div>
          <div className="p-2">
            {recipe.author === loggedInUser && (
              <button
                className="rounded-md bg-red-600 px-3 py-2 text-background"
                onClick={handleDelete}
              >
                Delete
              </button>
            )}
          </div>
        </div>
        {/* Image */}
        <div className="mt-4 flex justify-center gap-2 bg-light">
          <img
            src={`${import.meta.env.VITE_IMAGE_HOST}/uploads/${recipe.image}`}
            alt="recipe image"
            className="h-[335px] w-[751px] object-cover sm:h-[660px]"
          />
        </div>

        {/* Icon buttons */}
        <div className="mt-4 flex justify-between gap-2">
          <div className="flex gap-4">
            <FaRegHeart size={30} />
            <FaRegComment size={30} />
            <RiShareForwardLine size={30} />
          </div>

          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={25}
                fill={i < recipe.rating ? "#F9BB1F" : "#B0B0B0"}
              />
            ))}
          </div>
        </div>
        {/* Details */}
        <div className="mt-2">
          <h4 className="font-semibold">Description:</h4>
          <p>{recipe.description}</p>
        </div>
        <div className="mt-4 py-4">
          <h4 className="font-semibold">Ingredients:</h4>
          <ul className="list-disc pl-6">
            {Array.isArray(recipe.ingredients) ? (
              recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))
            ) : (
              <li>No ingredients available</li>
            )}
          </ul>
        </div>
      </main>
    </>
  );
};

export default BlogPost;
