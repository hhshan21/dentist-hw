import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Procedures from "./components/Procedures";
import Contact from "./components/Contact";
import SiteHeader from "./components/Siteheader";

const App = () => {
    return (
        <div>
            <div>
                <SiteHeader />
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/procedures" element={<Procedures />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
