import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { Gallery } from "@/components/Gallery";
import WordFadeIn from "@/components/ui/word-fade-in";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

const Home = () => {
  const loggedInUser = localStorage.getItem("username");
  return (
    <>
      {/* Hero Section 1 */}
      <section className="hero-responsive">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full opacity-20 blur-[100px]"></div>
        </div>

        <div className="flex flex-col gap-y-2">
          <h1>
            <WordFadeIn
              words="Discover Your Next Favorite Recipe Today!"
              className="text-center sm:text-start"
            ></WordFadeIn>
          </h1>
          <p>
            Explore our handpicked selection of the most popular recipes that
            our community loves. Dive in and find inspiration for your next
            meal!
          </p>
          <div className="flex justify-center gap-2 sm:justify-start">
            <Link to="/recipes">
              <InteractiveHoverButton text="Explore" className="bg-primary" />
            </Link>
            <Link to="/community-hub">
              <InteractiveHoverButton text="Join" />
            </Link>
          </div>
        </div>

        <div>
          <img
            src="../../public/images/heropic.png"
            alt="hero picture"
            className="h-auto w-full rounded-3xl p-4"
          />
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="hero-responsive">
        <div className="order-first flex flex-col gap-y-2 sm:order-last">
          <h1>
            <WordFadeIn
              words="Uncover Our Community's Favorite Recipes: Delicious Dishes for Every Occasion"
              className="text-center sm:text-start"
            ></WordFadeIn>
          </h1>
          <p>
            Explore a curated selection of our community's top-rated recipes,
            each accompanied by vibrant images and enticing descriptions.
          </p>
        </div>

        <div className="max-w-full">
          <img
            src="../../public/images/chefcommunity1.png"
            alt="people picture"
            className="h-auto w-full rounded-3xl p-4"
          />
        </div>
      </section>

      {/* Recipe Gallery */}
      <section className="mb-8 p-4">
        <div className="flex flex-col items-center">
          <h1>Recipe Gallery</h1>
          <p>See our vibrant collection of delicious dishes!</p>
        </div>
        <Gallery></Gallery>
      </section>

      {/* Call to action section */}
      <section className="flex flex-col items-center justify-center gap-16 p-4">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-fluid-md font-bold text-primary">Connect</p>
          <h1>Join Our Thriving Cooking Community Today</h1>
          <p>
            Discover a vibrant community where food lovers unite. Share recipes,
            tips, and experiences with fellow cooking enthusiasts.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-8 p-4 text-center sm:flex-row">
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-text/5 p-8">
            <FaPeopleGroup size={30} fill="#F9BB1F" />
            <h3>Stay Updated with Our Community Newsfeed</h3>
            <p>Get the latest updates and trends in cooking.</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-text/5 p-8">
            <BsFillSearchHeartFill size={30} fill="#F9BB1F" />
            <h3>Easily Find Recipes with Our Search Feature</h3>
            <p>Quickly locate your favorite dishes and ideas.</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-text/5 p-8">
            <FaStar size={30} fill="#F9BB1F" />
            <h3>Rate and Review Your Favorite Recipes</h3>
            <p>Share your thoughts and help others discover great meals.</p>
          </div>
        </div>
      </section>

      {/* Hero Section 3 */}
      <section className="hero-responsive mt-10">
        <div className="flex flex-col gap-y-2">
          <h1>
            <WordFadeIn
              words="Join Our Cooking Community Today"
              className="text-center sm:text-start"
            ></WordFadeIn>
          </h1>
          <p>
            Share your favorite recipes and connect with fellow cooking
            enthusiasts in our vibrant community.
          </p>
          <div className="flex justify-center gap-2 sm:justify-start">
            <Link to={loggedInUser ? "/recipes" : "/login"}>
              <InteractiveHoverButton text="Join" className="bg-primary" />
            </Link>
            <Link to="/blog-post">
              <InteractiveHoverButton text="Submit" />
            </Link>
          </div>
        </div>

        <div className="max-w-full">
          <img
            src="../../public/images/chefcommunity2.png"
            alt="people picture"
            className="h-auto w-full rounded-3xl p-4"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
