import { useState } from "react";
import { FaImage } from "react-icons/fa6";
import { Link } from "react-router-dom";

const StoryCard = ({ story }) => {
  const {
    highlightedBar,
    title,
    author,
    postDate,
    imgUrl,
    description,
    postUrl,
  } = story;
  const [imgError, setImgError] = useState(false);
  return (
    <div className="w-full h-full mx-auto max-w-[400px] flex flex-col items-center justify-between p-5 bg-blue-50 ">
      <div className="uppercase bg-[#F7B500] hover:bg-[#B88E19] p-1 rounded-md text-[11px] md:text-[10px] text-center font-bold font-montserrat">
        <p>{highlightedBar}</p>
      </div>
      {/* Card Details */}
      <Link
        to={postUrl}
        className="w-full mt-3 flex flex-col items-center hover:text-[#80ba7f]"
      >
        {/* Title */}
        <h1 className="font-montserrat font-bold text-[20px] md:text-[18px] text-center my-2 ">
          {title}
        </h1>
      </Link>
      {/* Post Author and Date */}
      <p className="text-[13px] uppercase mb-2">
        By {author} / Published {postDate}
      </p>
      {/* Card Image */}
      <Link to={postUrl} className="h-[200px] block ">
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 border border-dashed border-gray-400 rounded-lg shadow-md">
            <FaImage className="size-20 mt-10" />
            <p className="text-2xl text-gray-500 text-center font-medium p-10 ">
              Image Not Available
            </p>
          </div>
        ) : (
          <img
            className="w-full h-full object-cover rounded-lg shadow-md"
            src={imgUrl}
            alt="Project Image"
            onError={() => setImgError(true)}
          />
        )}
      </Link>

      {/* Description */}
      <div className="my-3 text-[#687279] text-sm w-full text-justify">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default StoryCard;
