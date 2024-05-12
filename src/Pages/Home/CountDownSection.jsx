import countdownBg from "../../Images/countdownBg.jpg";
import DoubleHeart from "../../components/DoubleHeart";

function CountDownSection() {
    return (
        <div className="h-[80vh] relative flex">
            <img
                src={countdownBg}
                alt="Loading error"
                className="absolute top-0 h-full w-full object-cover"
            />

            <div className="z-20 h-full w-full bg-[#0000005d] flex flex-col justify-center items-center text-white">
                <h2 className="border-y-[3px] border-double border-white text-center text-lg py-1 sm:px-12 mx-5">
                    *** AT FOXEGAN HOTEL & RESTAURANT, LOS ANGELES ***
                </h2>
                <div className="text-6xl font-serif text-center -rotate-[10deg] my-6">
                    <p>Counting</p>
                    <p>Down</p>
                </div>
                <DoubleHeart />
                <div className="flex gap-5 text-xl">
                    <span>0W</span>
                    <span>0D</span>
                    <span>0h</span>
                    <span>0m</span>
                    <span>0s</span>
                </div>
            </div>
        </div>
    );
}

export default CountDownSection;
