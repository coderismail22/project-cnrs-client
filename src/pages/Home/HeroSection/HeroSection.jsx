const HeroSection = () => {
  return (
    // TODO: Fix Text Positioning
    <>
      {/* Hero Image */}
      <div className="relative">
        <img
          src="/src/assets/hero-section-img.jpg"
          alt="CNRS Logo"
          className="object-cover object-center w-full h-auto"
        />
        <div className="absolute top-10 right-4">
          <p className="text-right text-[#f7f6f4] text-3xl md:4xl lg:text-5xl font-extrabold uppercase  p-4 rounded-lg">
            Striving <br /> for building <br /> social-ecological <br />
            resilience
          </p>

          <p className="text-right text-[#f7f6f4] text-sm font-extrabold uppercase  p-4 rounded-lg">
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
      {/* Hero Text */}
      <div>
        <h1 className="font-blinker font-extrabold ">
          we work to find solutions to most pressing environmental, ecological,
          livelihood and development challenges.
        </h1>
      </div>
    </>
  );
};

export default HeroSection;
