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
        <h1 className="p-10 font-blinker font-extrabold text-3xl text-center uppercase">
          we work to find solutions to most pressing environmental, ecological,
          livelihood and development challenges.
        </h1>
        <p>
          CNRS conducts research as well as implements projects on, but not
          limited to: Natural resource management, Climate change adaptation and
          Mitigation, Disaster risk reduction and Mitigation, Early warning,
          Adaptive agriculture, Waste management, Livelihoods enhancement, Local
          governance, Institutional development, Nutrition, Gender, Process
          monitoring and evaluation and policy & advocacy all over Bangladesh.
          All interventions of CNRS are strategically managed under seven key
          program areas. These programs encompass a broad spectrum of
          activities, each tailored to address specific challenges and
          opportunities in their respective fields, aligning with CNRS’s
          overarching goals of sustainable development and societal betterment.
          In doing so, CNRS brings governments, NGOs, the UN, international
          organizations together to develop policies and share best practices.
        </p>
      </div>
    </>
  );
};

export default HeroSection;
