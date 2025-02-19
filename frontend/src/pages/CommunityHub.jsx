import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import RippleButton from "@components/ui/ripple-button";
import Reviews from "@components/Reviews";

const CommunityHub = () => {
  return (
    <>
      <section className="container mx-auto flex flex-col gap-10 p-4">
        {/* Card Carousel */}
        <div className="min-w-full">
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img
                src="../../public/images/carousel/carousel1.jpg"
                className="h-auto w-full rounded-xl object-cover shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../public/images/carousel/carousel2.jpg"
                className="h-auto w-full rounded-xl object-cover shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../public/images/carousel/carousel3.jpg"
                className="h-auto w-full rounded-xl object-cover shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../public/images/carousel/carousel4.jpg"
                className="h-auto w-full rounded-xl object-cover shadow-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/*  */}
        <div className="flex flex-col items-center justify-center gap-4 py-4 text-center sm:flex-row sm:text-start">
          <h1 className="font-mona">
            Connect, Share and Engage with the Community
          </h1>

          <div className="flex flex-col items-center gap-4 sm:items-start">
            <p>
              Welcome to a lively space where you can share your favourite
              ingredients and discover new ones. Engage with fellow enthusiasts
              through comments and ratings, making every post a chance to
              connect.
            </p>
            <Link to="/login">
              <RippleButton className="border-none bg-primary font-bold">
                Get Started
              </RippleButton>
            </Link>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col items-center justify-center gap-2 text-center sm:items-start">
          <h1 className="font-mona">Join Our Ingredient Community Today</h1>
          <p>
            Share your favourite ingredients, connect with others, and discover
            new culinary delights together!
          </p>
          <Link to="/blog-post">
            <RippleButton className="border-none bg-primary font-bold">
              Post
            </RippleButton>
          </Link>
        </div>

        {/* Reviews */}
        <Reviews />
      </section>
    </>
  );
};

export default CommunityHub;
