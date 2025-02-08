import LatestActivity from "./LatestActivity";

const Blogs = () => {
  return (
    <>
      <section className="px-4 sm:px-32">
        <div className="flex flex-col items-center justify-center text-center">
          <h1>Community</h1>
          <p>
            Welcome to our vibrant community blog, where every food enthusiasts
            come together to share insights, tips, and success stories on our
            recipe app.
          </p>
        </div>

        <LatestActivity />
      </section>
    </>
  );
};

export default Blogs;
