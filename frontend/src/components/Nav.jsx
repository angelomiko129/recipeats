import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import RippleButton from "./ui/ripple-button";

export const Nav = ({ logo, changeLogo, isDarkMode }) => {
  const navigate = useNavigate();
  // State for menu and scroll
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Get currently loggined user
  const loggedInUser = localStorage.getItem("username");

  useEffect(() => {
    // Function to add a background to nav if vertical scroll is > 50
    const scroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    // Attach an event listener to webpage scroll
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  // Fuction for logout
  const handleLogout = () => {
    // Remove username and token after logout
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    // Navigate to login after logout
    navigate("/login");
  };

  return (
    <>
      {/* Effects */}
      <div className="absolute top-0 z-[-2] h-screen w-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(249,187,31,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

      <nav
        className={`sticky top-0 z-[10] flex items-center justify-between px-4 text-fluid-lg ${
          isScrolled
            ? isDarkMode
              ? "border-b border-dark bg-background"
              : "border-b border-light bg-background"
            : "bg-transparent"
        }`}
      >
        <NavLink to="/">
          <img src={logo} alt="Logo" className="size-[7.2rem] pl-3 sm:p-0" />
        </NavLink>

        {/* Mobile nav */}
        <div
          className={`fixed left-0 top-0 z-20 w-full transform border-b bg-background transition-all duration-300 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } sm:hidden`}
        >
          <div className="absolute right-4 top-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold text-primary"
            >
              X
            </button>
          </div>
          {/* Mobile Nav */}
          <ul className="flex flex-col items-center justify-center gap-8 py-20">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-primary text-primary" : ""
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/community-hub"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-primary text-primary" : ""
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Community Hub
            </NavLink>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-primary text-primary" : ""
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Recipes
            </NavLink>
            <NavLink
              to="/blog-post"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-primary text-primary" : ""
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </NavLink>
          </ul>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden cursor-pointer items-center justify-between gap-10 text-fluid-md font-medium text-text sm:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-primary text-primary" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/community-hub"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-primary text-primary" : ""
            }
          >
            Community Hub
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-primary text-primary" : ""
            }
          >
            Recipes
          </NavLink>
          <NavLink
            to="/blog-post"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-primary text-primary" : ""
            }
          >
            Blogs
          </NavLink>
        </ul>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            {/* Button for login or logout */}
            {loggedInUser ? (
              <>
                <p className="hidden sm:block">
                  &#128075; there, {loggedInUser}
                </p>
                <RippleButton className="border-none bg-primary">
                  <p className="text-fluid-base" onClick={handleLogout}>
                    Logout
                  </p>
                </RippleButton>
              </>
            ) : (
              <NavLink to="/login">
                <RippleButton className="border-none bg-primary">
                  <p className="text-fluid-base">Login</p>
                </RippleButton>
              </NavLink>
            )}
            {/* Theme icon */}
            <button
              onClick={changeLogo}
              className="p-1 hover:rounded-xl hover:bg-text/10 sm:p-0"
            >
              {isDarkMode ? (
                <MdLightMode color="#F4F4F4" className="size-8 rounded-lg" />
              ) : (
                <MdDarkMode color="#09090B" className="size-8 rounded-lg" />
              )}
            </button>
            {/* Hamburger Menu */}
            <GiHamburgerMenu
              className="block size-7 cursor-pointer sm:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};
