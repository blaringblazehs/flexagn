import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h2>Flexagn</h2>
                </div>
                {/* menu part */}
                <div className={menu ? "mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
                {/* hamburgar menu */}
                <div className="hamburger-menu">
                    <a href="#" onClick={() => setMenu(!menu)}>
                        <GiHamburgerMenu />
                    </a>
                </div>
            </nav>
            {/* main heading section */}
            {/* <section className="hero-section">
                <p>Welcome to </p>
                <h2>Flexacon</h2>
            </section> */}
        </>
    );
};
export default Navbar;
