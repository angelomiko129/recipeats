import { formatDistanceToNow } from "date-fns";
import { FaStar, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({ recipe }) => {
  const navigate = useNavigate();
  // Format time
  const formattedTime =
    recipe.createdAt &&
    formatDistanceToNow(new Date(recipe.createdAt), { addSuffix: true });

  return (
    <>
      <main>
        {/* Cards */}
        <div
          className="flex w-full cursor-pointer flex-col gap-4 rounded-md bg-card p-4"
          onClick={() => navigate(`/recipes/${recipe._id}`)}
        >
          <img
            src={`/backend/uploads/${recipe.image}`}
            alt=""
            className="aspect-video rounded-md object-cover"
          />
          <p>{recipe.title}</p>
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={25}
                  fill={i < recipe.rating ? "#F9BB1F" : "#B0B0B0"}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <FaClock size={20} />
              <p className="text-sm text-gray-500"> {formattedTime || ""}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Card;
