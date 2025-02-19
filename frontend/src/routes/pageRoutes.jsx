import Home from "@pages/Home";
import CommunityHub from "@pages/CommunityHub";
import Recipe from "@pages/Recipe";
import Blogs from "@pages/Blogs";
import Login from "@pages/Login";
import Register from "@pages/Register";
import CategoryPage from "@pages/CategoryPage";
import RecipeDetails from "@pages/RecipeDetails";

export const routes = [
  { path: "/", element: <Home />, title: "Recipeats" },
  { path: "/community-hub", element: <CommunityHub />, title: "Community Hub" },
  { path: "/recipes", element: <Recipe />, title: "Recipes" },
  { path: "/blog-post", element: <Blogs />, title: "Blogs" },
  { path: "/login", element: <Login />, title: "Log In" },
  { path: "/register", element: <Register />, title: "Register" },
  {
    path: "/category/:category",
    element: <CategoryPage />,
    title: ({ category }) =>
      `${category.charAt(0).toUpperCase() + category.slice(1)} Recipes`,
  },
  { path: "/recipes/:id", element: <RecipeDetails />, title: "Recipe Details" },
  {
    path: "*",
    element: (
      <div className="h-64 p-4 text-center sm:text-start">
        <h1>404 Not Found</h1>
      </div>
    ),
    title: "404 Not Found",
  },
];
