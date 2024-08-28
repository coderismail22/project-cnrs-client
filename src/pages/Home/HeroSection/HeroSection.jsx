import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    // Hero Section
    <section
      className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/assets/hero-img.jpg')", // Replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-start lg:w-1/2">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Your Hero Title Here
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          This is a description text that gives more context about the hero
          section.
        </p>
        <Link className="font-montserrat   text-xl bg-[#c7b362]  w-full h-[50px] p-2 mt-5">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
