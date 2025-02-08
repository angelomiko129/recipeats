import { useNavigate } from "react-router-dom";

const Featured = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <>
      <section className="mt-2">
        <div className="bg-card size-[28rem] w-full rounded-md p-2">
          <img
            src={`/backend/uploads/${recipe.image}`}
            alt="recipe image"
            className="mb-2 h-[181px] w-full rounded-md object-cover"
          />
          <div className="flex h-[16rem] flex-col flex-wrap justify-between gap-4">
            <p className="font-medium">{recipe.title}</p>
            <p className="h-32 font-medium">{recipe.description}</p>
            <button
              className="hover:bg-card rounded-md bg-primary px-4 py-2 font-medium hover:border hover:border-primary"
              onClick={() => navigate(`/recipes/${recipe._id}`)}
            >
              See More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
