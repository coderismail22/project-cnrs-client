const HeroSection = () => {
  return (
    // TODO: Fix Text Positioning
    <div className="relative">
      <img
        src="/src/assets/hero-section-img.jpg"
        alt="CNRS Logo"
        className="object-cover object-center w-full h-auto"
      />
      <div className="absolute top-28 right-4">
        <p className="text-right text-[#f7f6f4] text-3xl md:4xl lg:text-5xl font-extrabold uppercase  p-4 rounded-lg">
          Striving <br /> for building <br /> social-ecological <br />
          resilience
        </p>
      </div>
      <div className="absolute bottom-24 right-4 ">
        <p className=" text-right text-[#f7f6f4] text-sm font-extrabold uppercase  p-4 rounded-lg">
          <span className=" bg-[#3A5231] bg-opacity-90">
            we work to find solutions to most pressing environmental
          </span>
          <br />
          <span className=" bg-[#3A5231] bg-opacity-90">
            ecological, livelihood and development challenges.
          </span>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
