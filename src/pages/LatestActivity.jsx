import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import BlogPost from "@/components/BlogPost";
import CreatePost from "@/components/CreatePost";
import Featured from "@/components/Featured";
import { createRecipe, fetchRecipes } from "@/api";

const LatestActivity = () => {
  const navigate = useNavigate();
  // State for create post modal
  const [open, setOpen] = useState(false);
  // State for recipe and recipe data creation
  const [recipes, setRecipes] = useState([]);
  const [recipeData, setRecipeData] = useState({
    title: "",
    ingredients: "",
    description: "",
    instructions: "",
    author: "",
    tags: [],
    category: "",
    rating: 1,
  });
  // State for instructions
  const [steps, setSteps] = useState([""]);
  // State for images
  const [image, setImage] = useState(null);
  // Get current user on localstorage
  const username = localStorage.getItem("username");

  // Set recipe data based on users query
  const handleChange = (e) => {
    setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
  };

  // Set images based on upload file
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle tags when receiving it
  const handleTagsChange = (e) => {
    const { value } = e.target;
    setRecipeData({
      ...recipeData,
      tags: value.split(",").map((tag) => tag.trim()),
    });
  };

  // Handle recipe after deletion
  const handleRecipeDelete = (id) => {
    setRecipes((prev) => prev.filter((recipe) => recipe._id !== id));
  };

  // Handle steps
  const handleStepChange = (e, index) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = e.target.value;
    setSteps(updatedSteps);
  };

  // Handle add steps
  const handleAddStep = () => {
    setSteps([...steps, ""]);
  };

  // Handle remove steps
  const handleRemoveStep = (index) => {
    const updatedSteps = steps.filter((_, i) => i !== index);
    setSteps(updatedSteps);
  };

  // Function for submitting the form for createpost
  const handleSubmit = (e) => {
    e.preventDefault();
    // If username dont exist on localstorage then navigate to login
    if (!username) {
      navigate("/login");
      return;
    }

    // Store the received data to FormData
    const formData = new FormData();
    formData.append("title", recipeData.title);
    formData.append("ingredients", recipeData.ingredients);
    formData.append("description", recipeData.description);
    formData.append("instructions", steps.join(","));
    formData.append("author", username || "Anonymous");
    formData.append("category", recipeData.category);
    formData.append("rating", recipeData.rating);
    formData.append("tags", recipeData.tags.join(","));
    if (image) formData.append("image", image);

    const postRecipe = async () => {
      try {
        // Store the formData to the database
        const { data } = await createRecipe(formData);
        setRecipes((prev) => [data, ...prev]);
        // Close the modal
        setOpen(false);
        // reset its the value on input field when creating new post
        setRecipeData({
          title: "",
          ingredients: "",
          description: "",
          instructions: "",
          author: "",
          tags: [],
          category: "",
          rating: 1,
        });
        // reset steps and image
        setSteps([""]);
        setImage(null);
      } catch (err) {
        console.error(err);
      }
    };

    postRecipe();
  };

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        // Fetch all recipes when the component mounts
        const { data } = await fetchRecipes();
        // Set fetch data to recipe state
        setRecipes(data.recipes);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
    };

    loadRecipes();
  }, []);

  return (
    <>
      {/* Featured Section */}
      <h3 className="mt-6 px-2">Featured</h3>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {recipes.slice(0, 4).map((recipe) => (
          <Featured key={recipe._id} recipe={recipe} />
        ))}
      </div>

      {/* Underline */}
      <hr className="mb-8 mt-6 border-text" />

      <div className="my-1 flex w-full justify-center">
        {/* Create post button */}
        <button
          className="flex items-center gap-2 rounded-md bg-primary px-4 py-2"
          onClick={() => setOpen(true)}
        >
          <CiEdit size={30} />
          Create Post
        </button>

        <CreatePost open={open} onClose={() => setOpen(false)}>
          <form onSubmit={handleSubmit}>
            {/* Profile and name */}
            <div className="flex flex-col items-center gap-2">
              <img
                src="/public/images/profiles/anonymous.png"
                alt="profile pic"
                className="w-14 rounded-full"
              />
              <div className="flex items-center">
                <p>{username || "Anonymous"}</p>
              </div>
            </div>
            {/* Form inputs */}
            <div className="grid grid-cols-2 gap-4">
              {/* Left side input */}
              <div>
                {/* Title input */}
                <div className="mt-4 flex justify-center gap-2">
                  <input
                    type="text"
                    name="title"
                    value={recipeData.title}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-md border bg-background p-4 outline-primary"
                    placeholder="Enter title"
                  />
                </div>
                {/* Description input */}
                <div className="mt-4 flex justify-center gap-2">
                  <textarea
                    rows="10"
                    name="description"
                    value={recipeData.description}
                    onChange={handleChange}
                    required
                    className="h-32 w-full resize-none rounded-md border bg-background p-4 outline-primary"
                    placeholder="Enter description..."
                  />
                </div>
                {/* Ingredients input */}
                <div className="mt-4 flex justify-center gap-2">
                  <textarea
                    rows="10"
                    name="ingredients"
                    value={recipeData.ingredients}
                    onChange={handleChange}
                    required
                    className="h-32 w-full resize-none rounded-md border bg-background p-4 outline-primary"
                    placeholder="Ingredients (comma separated)"
                  />
                </div>
                {/* Category input */}
                <div className="mt-4 flex justify-center gap-2">
                  <select
                    name="category"
                    value={recipeData.category}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-md border bg-background p-4 outline-primary"
                  >
                    <option value="">Select Category</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Snack">Snack</option>
                    <option value="Dessert">Dessert</option>
                  </select>
                </div>
                {/* Tags input */}
                <div className="mt-4 flex justify-center gap-2">
                  <input
                    type="text"
                    name="tags"
                    value={recipeData.tags.join(", ")}
                    onChange={handleTagsChange}
                    placeholder="Enter tags (comma separated)"
                    className="w-full resize-none rounded-md border bg-background p-4 outline-primary"
                  />
                </div>
              </div>
              {/* Right side input */}
              <div>
                {/* Instruction input */}
                <div className="mt-4">
                  <h5 className="text-center">Instructions (Step by Step)</h5>
                  {steps.map((step, index) => (
                    <div key={index} className="mb-2 flex gap-2">
                      <input
                        type="text"
                        value={step}
                        onChange={(e) => handleStepChange(e, index)}
                        placeholder={`Step ${index + 1}`}
                        className="w-full rounded-md border bg-background p-2 outline-primary"
                      />
                      {steps.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveStep(index)}
                          className="rounded-md bg-red-600 p-2 text-background"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddStep}
                    className="mt-2 rounded-md bg-primary p-2"
                  >
                    Add Step
                  </button>
                </div>
                {/* Ratings */}
                <div className="mt-4 flex justify-center gap-2">
                  <p>Rate:</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FaStar
                        key={i}
                        size={20}
                        className="cursor-pointer"
                        fill={i <= recipeData.rating ? "#F9BB1F" : "#B0B0B0"}
                        onClick={() =>
                          setRecipeData({ ...recipeData, rating: i })
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Image upload */}
              <div className="my-2">
                <label
                  htmlFor="file-upload"
                  className="flex h-10 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 transition-all hover:border-primary hover:bg-gray-50"
                >
                  <span className="text-lg text-gray-600">Upload an Image</span>
                  <input
                    id="file-upload"
                    type="file"
                    onChange={handleFileChange}
                    className="mt-4 hidden w-full"
                  />
                </label>
              </div>
            </div>
            {/* Post Button */}
            <div className="my-2">
              <button className="w-full rounded-md bg-primary">Post</button>
            </div>
          </form>
        </CreatePost>
      </div>

      {/* Render all blog posts */}
      <div className="mt-8 flex flex-col gap-4">
        {recipes.map((recipe) => (
          <BlogPost
            key={recipe._id}
            recipe={recipe}
            onDelete={handleRecipeDelete}
          />
        ))}
      </div>
    </>
  );
};

export default LatestActivity;
