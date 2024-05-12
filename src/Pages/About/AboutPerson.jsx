import DoubleHeart from "../../components/DoubleHeart";
import { FaQuoteLeft } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import "./AboutPerson.css";

function AboutPerson(prop) {
    const socialMediaIcons = [
        {
            id: 1,
            icon: <FaFacebookF />,
            link: "",
        },
        {
            id: 2,
            icon: <TfiGoogle />,
            link: "",
        },
        {
            id: 3,
            icon: <FaTwitter />,
            link: "",
        },
    ];

    return (
        <div className="img-container">
            {/* Top Image section */}
            <div className="h-[90vh] relative parallex">
                <img
                    src={prop.imageHead}
                    alt="groom image"
                    className="h-full w-full object-cover img-box"
                />
                <div className="absolute bg-[#00000047] top-0 h-full w-full text-white flex justify-center items-center flex-col text-center sm:pt-72 pt-36 font-medium">
                    <h2 className="uppercase text-[40px]">{prop.name}</h2>
                    <DoubleHeart />
                    <p className="font-serif text-sm max-w-[700px] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer ultrices malesuada ante quis pharetra. Nullam
                        non bibendum dolor. Ut vel turpis
                    </p>
                </div>
            </div>

            {/* About person section */}
            <div className="bg-slate-100 pb-20">
                {/* Quotation symbol box */}
                <div className="h-20 w-20 rounded-full bg-[white] m-auto relative bottom-10 flex justify-center items-center text-3xl">
                    <FaQuoteLeft className="text-gray-400" />
                </div>

                {/* Social media icon */}
                <div className="flex gap-3 justify-center">
                    {socialMediaIcons.map((item) => (
                        <a
                            href={item.link}
                            key={item.id}
                            className="p-3 border-[1px] border-[#3f3f3f] rounded-full text-xl text-gray-500 hover:bg-[#f73939] hover:text-white hover:border-[#f73939] transition-all duration-[0.3s] "
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>

                {/* About person */}
                <div className="flex flex-wrap gap-10 justify-center py-20 text-sm font-serif text-gray-500">
                    <div className="about-person about-person flex flex-col gap-5">
                        <div>
                            <b>I'm {prop.name}.</b> Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Fusce urna urna,
                            imperdiet et purus ut, ultricies sollicitudin arcu.
                            Cras placerat, arcu non faucibus suscipit, ex arcu
                            consectetur enim, eu malesuada magna turpis sit amet
                            mauris. Nullam nec leo at lorem interdum commodo.
                            Etiam mollis massa in mauris lacinia porta.
                            Pellentesque tristique, ante nec dictum mollis,
                            felis ligula ullamcorper velit, ac auctor est ipsum
                            vehicula ex. Donec eu blandit est, id gravida justo.
                            Maecenas laoreet laoreet congue. Cras sit amet
                            vestibulum ligula. Ut nec erat tristique, iaculis
                            purus ac, pellentesque mi. Donec ac cursus est. Nunc
                            id varius enim, ut tincidunt mi. Integer non est
                            eros. Aliquam ex magna, elementum at dignissim
                            vitae, placerat quis ante.
                        </div>
                        <div>
                            Morbi a condimentum quam. Nullam quis quam at ex
                            eleifend feugiat. Vivamus lacinia quam quam, ac
                            viverra turpis pellentesque in. Mauris sollicitudin
                            sapien risus, non sagittis velit dictum eget.
                            Suspendisse velit lacus, pulvinar non ante
                        </div>
                    </div>
                    <div className="about-person flex flex-col gap-5">
                        <div>
                            ut, venenatis vehicula dolor. In hac habitasse
                            platea dictumst. Nunc blandit egestas magna eu
                            commodo. Proin ut eros ante. Mauris vitae tempus
                            sem, ac venenatis arcu. Etiam eget blandit arcu,
                            quis consequat nunc. Nunc pulvinar vehicula
                            pellentesque. Sed auctor scelerisque mi. Curabitur
                            mattis consequat lacus non iaculis.
                        </div>
                        <div>
                            Integer justo nibh, ullamcorper et dolor ut, porta
                            dapibus ante. Sed quis ex at felis ornare pharetra
                            vitae id dolor. Donec finibus sagittis ipsum,
                            tristique luctus tellus pharetra ultrices.
                            Suspendisse mollis, tortor non placerat placerat,
                            ligula odio luctus est, sit amet scelerisque diam
                            ante tristique massa. Aenean molestie tellus a quam
                            porttitor vehicula. Aliquam quis eros risus. Sed
                            porttitor elit et diam feugiat egestas. Proin
                            consequat suscipit accumsan. Curabitur mauris risus,
                            tincidunt ut odio non, scelerisque vehicula metus.
                            Proin urna odio, dignissim vitae nibh vitae,
                            consectetur placerat tortor. In a ante ultrices,
                            mollis erat eget, sagittis metus. Mauris sodales
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Image section */}
            <div className="h-[70vh] relative parallex z-[-2]">
                <img
                    src={prop.imageFoot}
                    alt="Person img"
                    className="h-full w-full object-cover img-box object-bottom"
                />
                <div className="h-full w-full absolute top-0 bg-[#0000005c] flex flex-col justify-center items-center">
                    <DoubleHeart />
                    <p className="uppercase tracking-wider text-center text-white text-2xl">
                        GERRARD & DIANNE
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPerson;
