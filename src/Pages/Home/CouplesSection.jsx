import PhotoBox from "./PhotoBox";
import man from "../../Images/man.jpg";
import woman from "../../Images/woman.jpg";
import DoubleHeart from "../../components/DoubleHeart";
import "./Home.css";

function CouplesSection() {
    const personList = [
        {
            role: "Groom",
            name: "Gerrard Leandro",
            image: man,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar.",
            buttonText: "About him",
        },
        {
            role: "Bride",
            name: "Dianne Anna",
            image: woman,
            description:
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar.",
            buttonText: "About her",
        },
    ];

    return (
        <div className="py-36 bg-gray-200 ">
            {/* Top text */}
            <div className="text-center">
                <h2 className="uppercase text-4xl my-5">The Happy Couple</h2>
                <p className="text-slate-500 w-[67%] text-sm m-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ultrices malesuada ante quis pharetra. Nullam non
                    bibendum dolor. Ut vel turpis accumsan, efficitur dolor
                    fermentum, tincidunt metus.
                </p>

                <DoubleHeart />
            </div>

            {/* Image section */}
            <div className="h-max w-full flex flex-wrap gap-4 p-5 justify-center items-center ">
                {personList.map((person) => (
                    <div key={person.role}>
                        <PhotoBox {...person} />
                        <div className="px-4 py-7 w-full md:w-[400px] text-gray-600 font-serif">
                            <p>
                                <b>I'm {person.name}. </b>
                                {person.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CouplesSection;
