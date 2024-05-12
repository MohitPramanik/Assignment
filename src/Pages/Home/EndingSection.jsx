import slide4 from "../../Images/slide-4.jpg";
import DoubleHeart from "../../components/DoubleHeart";

function EndingSection() {
    return (
        <div className="h-[80vh] w-full relative parallex">
            <img
                src={slide4}
                alt=""
                className="h-full w-full object-cover background"
            />

            <div className="absolute top-0 h-full w-full bg-[#0000004f] flex justify-center items-center text-center text-white flex-col">
                <div className="text-6xl -rotate-[10deg] font-serif">
                    <p>Thank</p>
                    <p>You</p>
                </div>
                <DoubleHeart />
                <p className="text-xl tracking-widest">GERRARD & DIANNE</p>
            </div>
        </div>
    );
}

export default EndingSection;
