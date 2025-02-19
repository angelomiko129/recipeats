import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@components/Layout";
import { useTheme } from "@components/ThemeProvider";
import PageTitleHandler from "@components/PageTitleHandler";
import { routes } from "./pageRoutes";

const AppRouter = () => {
  const { isDarkMode, logo, toggleTheme } = useTheme();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout logo={logo} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      ),
      children: routes.map(({ path, element, title }) => ({
        path,
        element: <PageTitleHandler title={title}>{element}</PageTitleHandler>,
      })),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
