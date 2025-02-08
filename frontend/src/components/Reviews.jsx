const Reviews = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Cards */}
        <div className="flex flex-col items-center gap-4 rounded-xl border-[1px] border-primary bg-primary/10 p-4">
          <p className="text-center">
            "This recipe was fantastic! The instructions were clear, and the
            flavors came together perfectly. I'll definitely be making this
            again.”
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/public/images/profiles/profile5.png"
              alt=""
              className="rounded-full"
            />
            <p>Zairel Nakar</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-xl border-[1px] border-primary bg-primary/10 p-4">
          <p className="text-center">
            "I made a few tweaks to suit my taste, but overall, this was a hit
            with my family. Thank you for sharing!”
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/public/images/profiles/profile4.png"
              alt=""
              className="rounded-full"
            />
            <p>Angelo Principio</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-xl border-[1px] border-primary bg-primary/10 p-4">
          <p className="text-center">
            "The dish turned out even better than I expected! Super easy to
            follow and so delicious. Great website to explore.”
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/public/images/profiles/profile2.png"
              alt=""
              className="rounded-full"
            />
            <p>Richard Alarcon</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-xl border-[1px] border-primary bg-primary/10 p-4">
          <p className="text-center">
            "I appreciate the detailed steps and the ingredient measurements
            were spot on. It made cooking so enjoyable!”
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/public/images/profiles/profile1.png"
              alt=""
              className="rounded-full"
            />
            <p>Manuelleo Antonio</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-xl border-[1px] border-primary bg-primary/10 p-4">
          <p className="text-center">
            "This recipe has become a new favorite in our household. It’s
            simple, flavorful, and absolutely delightful!”
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/public/images/profiles/profile3.png"
              alt=""
              className="rounded-full"
            />
            <p>Ramil Cosep</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-xl border-[1px] border-primary bg-primary/10 p-4">
          <p className="text-center">
            "Absolutely loved this recipe! It was quick to prepare and tasted
            like something straight out of a restaurant. Highly recommend!”
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/public/images/profiles/profile6.png"
              alt=""
              className="rounded-full"
            />
            <p>Prince Ton Santos</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
