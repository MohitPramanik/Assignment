import React from "react";
import { FaHeart } from "react-icons/fa";

function AttendingSection() {
    return (
        <div className="py-20 px-3 text-center bg-white">
            <div className="flex items-center justify-center text-xl">
                <span className="border-t-[1px] border-white w-3 h-1 m-1"></span>
                <FaHeart className="text-red-500 relative left-1" />
                <FaHeart className="text-gray-200" />
                <span className="border-t-[1px] border-white w-3 h-1 m-1"></span>
            </div>
            <h3 className="uppercase text-3xl font-medium tracking-wide mt-7">
                Are You Attending?
            </h3>
            <p className="text-slate-400 font-serif text-sm my-5">
                Please reserve before June 19th, 2015. Lorem ipsum dolor sit
                amet, consectetur adipiscing
            </p>

            <button className="my-5 border-[1px] border-gray-500 py-2 px-10 text-lg text-gray-500 hover:bg-red-500 hover:text-white">
                RSVP
            </button>
        </div>
    );
}

export default AttendingSection;
