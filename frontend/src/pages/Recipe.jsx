import { useState, useEffect } from "react";
import Card from "@components/Card";
import Categories from "@components/Categories";
import { Input } from "@components/ui/input";
import { WordRotate } from "@components/ui/word-rotate";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { fetchRecipes } from "@/api";

const Recipe = () => {
  // State for recipes
  const [recipes, setRecipes] = useState([]);
  // State for filtered recipes (search)
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        // Fetch recipes for the current page
        const { data } = await fetchRecipes(currentPage);
        setRecipes(data.recipes);
        setFilteredRecipes(data.recipes);
        setTotalPages(data.totalPages);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
    };

    loadRecipes();
  }, [currentPage]); // Runs when `currentPage` changes

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter recipes based on title
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query),
    );

    setFilteredRecipes(filtered);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <section>
        {/* Hero section */}
        <div className="relative h-56 w-full text-fluid-xxl shadow-md sm:h-96">
          <h1 className="absolute inset-0 flex items-center justify-center font-bold text-[#f9f6ed] shadow-lg">
            Explore&nbsp; Our&nbsp;
            <WordRotate
              className="bg-background px-2 font-sourceserif text-primary"
              words={["Recipe", "Creation", "Cuisine"]}
              duration={3000}
            />
          </h1>
          <img
            src="/public/images/recipehero.png"
            alt="Recipe Hero"
            className="size-full object-cover"
          />
        </div>

        {/* Search input */}
        <div className="flex flex-col items-center justify-between gap-4 p-4 sm:flex-row">
          <h1>Recipes</h1>
          <div className="flex w-full max-w-xs items-center space-x-2">
            <Input
              type="text"
              placeholder="Search your favorite recipe"
              value={searchQuery}
              onChange={handleSearch}
            />
            <BsFillSearchHeartFill
              size={30}
              className="cursor-pointer text-red-500"
            />
          </div>
        </div>
      </section>

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 gap-10 overflow-scroll p-4 sm:grid-cols-3">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <Card key={recipe._id} recipe={recipe} />
          ))
        ) : (
          <p className="text-center sm:text-start">
            No recipes found matching your search.
          </p>
        )}
      </div>

      {/* Pagination UI */}
      <div className="flex justify-center gap-4 p-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-md border bg-dark px-4 py-2 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-md border bg-dark px-4 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Recipe Categories */}
      <h1 className="p-4 text-center sm:text-start">Recipe Categories</h1>
      <div className="z-[-1 flex flex-col items-center justify-center gap-4 p-4">
        <Categories />
      </div>
    </>
  );
};

export default Recipe;
