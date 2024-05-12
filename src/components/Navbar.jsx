import { FaHeart } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Navbar() {
    const navLinks = [
        {
            id: 1,
            showText: "Home",
            path: "",
            childList: [
                {
                    id: "h1",
                    showText: "Menu variations",
                    path: "",
                },
                {
                    id: "h2",
                    showText: "Slider variations",
                    path: "",
                },
                {
                    id: "h3",
                    showText: "Preloader variations",
                    path: "",
                },
            ],
        },
        {
            id: 2,
            showText: "About",
            childList: [
                {
                    id: "a1",
                    showText: "About him",
                    path: "aboutHim",
                },
                {
                    id: "a2",
                    showText: "About her",
                    path: "aboutHer",
                },
            ],
        },
        {
            id: 3,
            showText: "Gallery",
            path: "",
            childList: [
                {
                    id: "g1",
                    showText: "Gallery",
                    path: "",
                },
                {
                    id: "g2",
                    showText: "Gallery with slider",
                    path: "",
                },
                {
                    id: "g3",
                    showText: "Full gallery-5 column",
                    path: "",
                },
                {
                    id: "g4",
                    showText: "Full gallery-4 column",
                    path: "",
                },
                {
                    id: "g5",
                    showText: "Full gallery-3 column",
                    path: "",
                },
            ],
        },
        {
            id: 4,
            showText: "The story",
            path: "",
        },
        {
            id: 5,
            showText: "G🤍D",
            path: "",
        },
        {
            id: 6,
            showText: "The Wedding",
            path: "",
            childList: [
                {
                    id: "w1",
                    showText: "Location",
                    path: "",
                },
                {
                    id: "w2",
                    showText: "Accomodation",
                    path: "",
                },
                {
                    id: "w3",
                    showText: "Bridesmaid",
                    path: "",
                },
                {
                    id: "w4",
                    showText: "Groomsmen",
                    path: "",
                },
                {
                    id: "w5",
                    showText: "Gift registry",
                    path: "",
                },
            ],
        },
        {
            id: 7,
            showText: "Blog",
            path: "",
            childList: [
                {
                    id: "b1",
                    showText: "Blog",
                    path: "",
                },
                {
                    id: "b2",
                    showText: "Blog slider",
                    path: "",
                },
                {
                    id: "b3",
                    showText: "Blog parallax image",
                    path: "",
                },
                {
                    id: "b4",
                    showText: "Blog parallax- slidebar",
                    path: "",
                },
            ],
        },
        {
            id: 8,
            showText: "Page",
            path: "",
        },
        {
            id: 9,
            showText: "Rsvp",
            path: "",
            childList: [
                {
                    id: "r1",
                    showText: "Rsvp-1",
                    path: "",
                },
                {
                    id: "r2",
                    showText: "Rsvp-2",
                    path: "",
                },
                {
                    id: "r3",
                    showText: "Rsvp-3",
                    path: "",
                },
                {
                    id: "r4",
                    showText: "Custom",
                    path: "",
                },
            ],
        },
    ];

    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <div className="fixed top-[30px] left-[30px] h-20 w-20 bg-red-500 text-white rounded-full z-20 justify-center items-center nav-icon hidden text-sm font-serif font-semibold">
                G🤍D
            </div>
            <nav
                className={`px-7 mt-11 absolute top-0 z-20 w-full ${
                    !isVisible && "hidden"
                }`}
            >
                <ul
                    id="menu"
                    className="flex justify-center items-center text-sm text-white font-semibold"
                >
                    {navLinks.map((item) => (
                        <div
                            className="flex flex-col relative list-item-box"
                            key={item.id}
                        >
                            {/* list items and different style for 5th item of object  */}
                            <li
                                className={`list-item  mx-3 uppercase  ${
                                    item.id !== 5 && "py-10 w-max"
                                }  ${
                                    item.id === 5 &&
                                    "bg-red-500 h-20 w-20 rounded-full circle-icon font-serif"
                                }`}
                            >
                                {/* heart icon with link text */}
                                <div className="link-area flex items-center justify-center gap-10">
                                    {item.id !== 5 &&
                                        item.id !== 1 &&
                                        item.id !== 6 && (
                                            <FaHeart className="text-red-600 text-[12px] heart-icon" />
                                        )}
                                    <span
                                        className={`${
                                            item.id !== 5 &&
                                            "hover:text-red-500"
                                        } cursor-pointer ${
                                            item.id === 5 &&
                                            "relative top-[30px] left-[1px]"
                                        }`}
                                    >
                                        <Link to={item.path}>
                                            {item.showText}
                                        </Link>
                                    </span>
                                </div>

                                {/* sublist items */}
                                {item.childList && (
                                    <ul
                                        className={` bg-white w-[200px] text-black  absolute top-20 z-10 ${
                                            item.id !== 1 && "left-6"
                                        }  border-t-4 border-red-500  sublist-item hidden`}
                                    >
                                        {item.childList.map((subitem) => (
                                            <li
                                                key={subitem.id}
                                                className="uppercase border-b-2 border-gray-300 p-3 hover:bg-red-500 hover:text-white cursor-pointer text-gray-500"
                                            >
                                                <Link to={subitem.path}>
                                                    {subitem.showText}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        </div>
                    ))}
                </ul>
            </nav>
            <GiHamburgerMenu
                id="hamburger"
                className="fixed top-10 right-10 text-5xl text-white hidden z-20"
                onClick={() => setIsVisible(!isVisible)}
            />
        </div>
    );
}

export default Navbar;
