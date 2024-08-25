import { FaChevronDown } from "react-icons/fa";
import YouTubeCard from "../../../components/YouTubeCard/YouTubeCard";

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
        <FaChevronDown className=" size-16 text-[#FFCD05] my-5" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
        <YouTubeCard />
        <YouTubeCard />
        <YouTubeCard />
      </div>
    </div>
  );
};

export default Documentaries;
