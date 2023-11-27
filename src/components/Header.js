import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="navbar navbar-white bg-info">
             <div className="container text-center">
                <Link to="/" className="text-decoration-none">
                    <h1 className="text-dark mx-auto">Task Track</h1>
                </Link> 
            </div>
        </header>
    )
}

export default Header;