import { FaHeart } from "react-icons/fa";

function DoubleHeart() {
    return (
        <div className="flex items-center text-xl justify-center my-5">
            <span className="border-t-2 border-gray-300 w-8 h-1 m-1"></span>
            <FaHeart className="text-red-500 relative left-1" />
            <FaHeart className="text-gray-300" />
            <span className="border-t-2 border-gray-300 w-8 h-1 m-1"></span>
        </div>
    );
}

export default DoubleHeart;
