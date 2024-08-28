import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export const TopBanner = () => {
  return (
    <h1 className="text-white py-2 text-center font-semibold bg-[#2B2D42] font-poppins flex gap-5 items-center justify-center">
      <Link to="#">
        <FaFacebook />
      </Link>
      <Link to="#">
        <FaSquareXTwitter />
      </Link>
      <Link to="#">
        <FaInstagram />
      </Link>
      <Link to="#">
        <FaLinkedin />
      </Link>
      <Link to="#">
        <FaYoutube />
      </Link>
    </h1>
  );
};
