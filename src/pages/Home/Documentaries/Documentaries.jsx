import { FaChevronDown } from "react-icons/fa";

const Documentaries = () => {
  return (
    <div>
      {/* Text */}
      <div className="text-center p-5 flex flex-col items-center justify-center">
        <h1 className="font-redhat text-5xl font-extrabold my-5">
          View Documentaries
        </h1>
        <p className="font-lato text-[#707A80] text">
          Visit our socials to watch documentaries of our interventions
        </p>
        <FaChevronDown  className=" size-16 text-[#FFCD05] my-5" />
      </div>
      {/* Down Arrow */}
    </div>
  );
};

export default Documentaries;
