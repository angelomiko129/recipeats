import { Outlet } from "react-router-dom";
import { Nav } from "@components/Nav";
import { Footer } from "@components/Footer";

const Layout = ({ logo, toggleTheme, isDarkMode }) => {
  return (
    <div
      className={`container relative mx-auto border-x font-mona ${isDarkMode ? "border-dark" : "border-light"}`}
    >
      <Nav logo={logo} changeLogo={toggleTheme} isDarkMode={isDarkMode} />
      <Outlet />
      <Footer logo={logo} />
    </div>
  );
};

export default Layout;
