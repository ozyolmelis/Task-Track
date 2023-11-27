import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-info">
            <div className="container text-center">
                <div className="d-flex justify-content-center">
                    <Link to="/about" className="text-light text-decoration-none">About us</Link>
                    <span className="text-light mx-2">|</span>
                    <Link to="/contact" className="text-light text-decoration-none">Contact</Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer;