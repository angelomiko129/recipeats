import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Categories = () => {
  // category image and name
  const categories = [
    { name: "Breakfast", imgSrc: "/public/images/categories/breakfast.png" },
    { name: "Lunch", imgSrc: "/public/images/categories/lunch.png" },
    { name: "Dinner", imgSrc: "/public/images/categories/dinner.png" },
    { name: "Snack", imgSrc: "/public/images/categories/snack.png" },
    { name: "Dessert", imgSrc: "/public/images/categories/dessert.png" },
  ];
  return (
    <>
      {/* Category cards */}
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.name.toLowerCase()}`}
            key={category.name}
          >
            <div className="relative shadow-md">
              <img
                src={category.imgSrc}
                alt="category pic"
                className="rounded-md opacity-80 transition duration-300 hover:opacity-100"
              />
              <div className="flex gap-4">
                <h3 className="absolute bottom-11 left-1/2 -translate-x-1/2 text-text">
                  {category.name}
                </h3>
                <FaArrowRight
                  className="absolute bottom-4 left-4 flex items-center justify-center rounded-full bg-primary p-1"
                  size={30}
                />
              </div>
            </div>
          </NavLink>
        ))}
      </section>
    </>
  );
};

export default Categories;
