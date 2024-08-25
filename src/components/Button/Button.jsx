import { FaArrowRightLong } from "react-icons/fa6";

const Button = () => {
  return (
    <div className="flex gap-2 items-center justify-center bg-black text-white p-3 ">
      <button className="font-palanquin">View Documentary</button>
      <FaArrowRightLong />
    </div>
  );
};

export default Button;
