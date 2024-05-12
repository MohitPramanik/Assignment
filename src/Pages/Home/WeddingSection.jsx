import { FaHeart } from "react-icons/fa";
import weddingCard1 from "../../Images/weddingCard1.jpg";
import weddingCard2 from "../../Images/weddingCard2.jpg";
import weddingCard3 from "../../Images/weddingCard3.jpg";
import PhotoBox from "./PhotoBox";

function WeddingSection() {
    const cardData = [
        {
            id: 1,
            image: weddingCard1,
            heading: "Location",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non",
            buttonText: "Get direction",
        },
        {
            id: 2,
            image: weddingCard2,
            heading: "Gift registry",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non",
            buttonText: "Get list",
        },
        {
            id: 3,
            image: weddingCard3,
            heading: "Accomodation",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non",
            buttonText: "Accomodation",
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center py-32 px-10 bg-gray-200 text-center">
            {/* Top text */}
            <div>
                <h2 className="uppercase text-2xl sm:text-4xl">The Wedding</h2>
                <p className="text-md text-gray-500 font-serif my-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing lorem
                    ipsum dolor sit amet, consectetur adipiscing
                </p>
                <div className="flex items-center text-xl justify-center my-5">
                    <span className="border-t-2 border-gray-300 w-8 h-1 m-1"></span>
                    <FaHeart className="text-red-500 relative left-1" />
                    <FaHeart className="text-gray-300" />
                    <span className="border-t-2 border-gray-300 w-8 h-1 m-1"></span>
                </div>
            </div>

            {/* Cards section */}
            <div className="flex justify-center items-center gap-3 flex-wrap h-max w-full">
                {cardData.map((item) => (
                    <div key={item.id} className="bg-white my-5">
                        <PhotoBox {...item} />
                        <div className="p-6 text-left my-5 w-full md:w-[380px]">
                            <h3 className="uppercase text-md sm:text-xl">
                                {item.heading}
                            </h3>
                            <p className="text-sm my-5 font-serif text-slate-500 ">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeddingSection;
