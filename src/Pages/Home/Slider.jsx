import React, { useState, useEffect } from "react";
import slide1 from "../../Images/slide-1.jpg";
import slide2 from "../../Images/slide-2.jpg";
import slide3 from "../../Images/slide-3.jpg";
import slide4 from "../../Images/slide-4.jpg";
import { FaHeart } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Slider = () => {
    const slides = [
        {
            id: 1,
            image: slide1,
        },
        {
            id: 2,
            image: slide2,
        },
        {
            id: 3,
            image: slide3,
        },
        {
            id: 4,
            image: slide4,
        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 4000);
        setIntervalId(id);
        return () => clearInterval(id);
    }, [slides.length]);

    const changeSlide = (index) => {
        clearInterval(intervalId);
        setCurrentSlide(index);
        const id = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 4000);
        setIntervalId(id);
    };

    const nextSlide = () => {
        const nextIndex =
            currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        changeSlide(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex =
            currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        changeSlide(prevIndex);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div
                className="flex h-full transition-transform  duration-500 ease-in-out"
                style={{
                    width: `${slides.length * 100}%`,
                    marginLeft: `-${currentSlide * 100}%`,
                }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full">
                        <img
                            src={slide.image}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2  text-black font-bold text-5xl mx-5 px-8 py-2 rounded-full z-40"
                onClick={prevSlide}
            >
                <FaChevronLeft />
            </button>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-black font-bold text-5xl mx-5 px-8 py-2 rounded-full z-40"
                onClick={nextSlide}
            >
                <FaChevronRight />
            </button>
            <div className="pt-20 h-screen w-full bg-[#00000044] z-10 absolute top-0 flex justify-center items-center flex-col text-white">
                <div
                    className="-rotate-[10deg] text-center"
                    style={{ fontFamily: "cursive" }}
                >
                    <p className="text-7xl">Save</p>
                    <p className="text-6xl relative bottom-1">The Date</p>
                    <p className="text-5xl">
                        -19<span className="text-red-500">.</span>12
                        <span className="text-red-500">.</span>16 -
                    </p>
                </div>
                <div className="my-10 py-1 px-12 border-y-[3px] border-double border-white">
                    <h4 className="text-lg tracking-widest text-center">
                        *** WE ARE GETTING MARRIED ***
                    </h4>
                </div>
                <div className="flex items-center text-xl">
                    <span className="border-t-[1px] border-white w-3 h-1 m-1"></span>
                    <FaHeart className="text-red-500 relative left-1" />
                    <FaHeart />
                    <span className="border-t-[1px] border-white w-3 h-1 m-1"></span>
                </div>
            </div>
        </div>
    );
};

export default Slider;
