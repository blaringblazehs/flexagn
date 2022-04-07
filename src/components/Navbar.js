import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
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
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Login</a>
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
