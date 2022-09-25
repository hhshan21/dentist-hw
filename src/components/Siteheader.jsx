import React from "react";
import { Link } from "react-router-dom";

const SiteHeader = () => {
    return (
        <div>
            <nav>
                <Link to="/">Go to Home Page</Link>
                <Link to="/procedures">See Our Procedures</Link>
                <Link to="/contact">Contact Us!</Link>
            </nav>
        </div>
    );
};

export default SiteHeader;
