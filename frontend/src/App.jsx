import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useParams,
} from "react-router-dom";
import logowhite from "@images/logo/logowhite.svg";
import logoblack from "@images/logo/logoblack.svg";
import { Footer } from "@components/Footer";
import { Nav } from "@components/Nav";
import Home from "@pages/Home";
import CommunityHub from "@pages/CommunityHub";
import Recipe from "@pages/Recipe";
import Blogs from "@pages/Blogs";
import Login from "@pages/Login";
import Register from "@pages/Register";
import CategoryPage from "@pages/CategoryPage";
import RecipeDetails from "@pages/RecipeDetails";

// Page title handler
const PageTitleHandler = ({ title, children }) => {
  const category = useParams();
  useEffect(() => {
    const pageTitle = typeof title === "function" ? title(category) : title;
    document.title = pageTitle;
  }, [title, category]);
  return children;
};

// Page routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        path: "/",
        element: (
          <PageTitleHandler title="Recipeats">
            <Home />
          </PageTitleHandler>
        ),
      },
      {
        path: "/community-hub",
        element: (
          <PageTitleHandler title="Community Hub">
            <CommunityHub />
          </PageTitleHandler>
        ),
      },
      {
        path: "/recipes",
        element: (
          <PageTitleHandler title="Recipes">
            <Recipe />
          </PageTitleHandler>
        ),
      },
      {
        path: "/blog-post",
        element: (
          <PageTitleHandler title="Blogs">
            <Blogs />
          </PageTitleHandler>
        ),
      },
      {
        path: "/login",
        element: (
          <PageTitleHandler title="Log In">
            <Login />
          </PageTitleHandler>
        ),
      },
      {
        path: "/register",
        element: (
          <PageTitleHandler title="Register">
            <Register />
          </PageTitleHandler>
        ),
      },
      {
        path: "/category/:category",
        element: (
          <PageTitleHandler
            title={({ category }) =>
              `${category.charAt(0).toUpperCase() + category.slice(1)} Recipes`
            }
          >
            <CategoryPage />
          </PageTitleHandler>
        ),
      },
      {
        path: "/recipes/:id",
        element: (
          <PageTitleHandler title="Recipe Details">
            <RecipeDetails />
          </PageTitleHandler>
        ),
      },
      {
        path: "*",
        element: (
          <PageTitleHandler title="404 Not Found">
            <div className="h-64 p-4 text-center sm:text-start">
              <h1>404 Not Found</h1>
            </div>
          </PageTitleHandler>
        ),
      },
    ],
  },
]);

function LayoutWrapper() {
  // State for logo theme
  const [logo, setLogo] = useState(logoblack);
  // State for website theme
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme === "dark" : true;
  });

  // ChangeLogo function
  const changeLogo = () => {
    setLogo((prevLogo) => (prevLogo === logowhite ? logoblack : logowhite));
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setLogo(logowhite);
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setLogo(logoblack);
    }
  }, [isDarkMode]);

  return <Layout logo={logo} changeLogo={changeLogo} isDarkMode={isDarkMode} />;
}

// Website layout including navbar and footer
function Layout({ logo, changeLogo, isDarkMode }) {
  return (
    <div
      className={`container relative mx-auto border-x font-mona ${
        isDarkMode ? "border-dark" : "border-light"
      }`}
    >
      <Nav logo={logo} changeLogo={changeLogo} isDarkMode={isDarkMode} />
      <Outlet />
      <Footer logo={logo} />
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
