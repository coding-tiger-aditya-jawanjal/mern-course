import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Minibar = () => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-4xl font-bold">Divine Shopping</h2>
      <input type="search" className="border-2 border-blue-500 rounded-md" />
      <div className="flex items-center gap-5">
        <span>
          <IoCartSharp size={32} className="text-green-600 cursor-pointer" />
        </span>
        <span>
          <FaRegHeart size={28} className="text-pink-600 cursor-pointer" />
        </span>
      </div>
    </div>
  );
};

export default Minibar;
