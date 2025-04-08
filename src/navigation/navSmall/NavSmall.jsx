import './NavSmall.css';
import { useState, useEffect } from "react";
import Burger from './Burger';

const NavSmall = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <div className={`nav-small ${scrolled ? "scrolled" : ""}`}>
            <div className="ns-logo">
                <h1 className={`ns-logo-dl ${scrolled ? "scrolled" : ""}`}>David Leder</h1>
                <h1 className={`ns-logo-sd ${scrolled ? "scrolled" : ""}`}>[Software Developer]</h1>
            </div>
            <div className="ns-menu-cont">
                <Burger />
            </div>
        </div>
    );
}

export default NavSmall;