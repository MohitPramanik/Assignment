import { FaHeart } from "react-icons/fa";
import "./Home.css";

function PhotoBox(prop) {
    return (
        <div className="h-[90vw] w-[90vw] md:h-[400px] md:w-[400px] relative flex justify-center items-center overflow-hidden img-box">
            <img
                src={prop.image}
                className="h-full w-full object-cover transition-all duration-[0.3s] ease-in"
            />

            {/* inner box */}
            <div className="h-[95%] w-[95%] border-2 border-white absolute hover-dark flex justify-center items-center">
                {/* Text content of box */}
                {prop.role && (
                    <div className="photo-content absolute bottom-16 left-0 w-full">
                        {/* Heart icon */}
                        <div className=" flex justify-center">
                            <FaHeart className="text-red-500 relative left-1" />
                            <FaHeart className="text-gray-300" />
                        </div>
                        <div className="flex justify-center text-white mt-5">
                            <p className="border-y-[3px] border-double w-max px-5 uppercase">
                                *** THE {prop.role} ***
                            </p>
                        </div>
                    </div>
                )}

                {/* Button to show on hover */}
                <button className="photo-hover-btn uppercase py-2 px-12 text-white border-[1px] border-white font-semibold hover:bg-[#f64040] hover:border-none pointer-events-auto opacity-0">
                    {prop.buttonText}
                </button>
            </div>
        </div>
    );
}

export default PhotoBox;
