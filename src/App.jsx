import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <div className="text-black">
                <Navbar />
                <Outlet />
            </div>
        </>
    );
}

export default App;
