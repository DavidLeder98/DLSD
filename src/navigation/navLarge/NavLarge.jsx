import './NavLarge.css';
import { useState, useEffect } from "react";
import { useNavigation } from '../../services/NavigationContext';

const NavLarge = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollToElement } = useNavigation();

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
        <div className={`nav-large ${scrolled ? "scrolled" : ""}`}>
            <div className="nl-logo-cont">
                <a href="https://www.lederdavid.com/" className="logo">
                    <h1 className={`logo-dl ${scrolled ? "scrolled" : ""}`}>David Leder</h1>
                    <h1 className={`logo-sd ${scrolled ? "scrolled" : ""}`}>[Software Developer]</h1>
                </a>
                <div className="nl-logo-line"></div>
            </div>
            <div className="nl-items">
                <a href="https://www.lederdavid.com/">
                    <h2 className="nl-link">Home<div className="nl-line"></div></h2>
                </a>
                <h2 className="nl-link" onClick={() => scrollToElement("about")}>About<div className="nl-line"></div></h2>
                <h2 className="nl-link" onClick={() => scrollToElement("stack")}>Tech Stack<div className="nl-line"></div></h2>
                <h2 className="nl-link" onClick={() => scrollToElement("projects")}>Projects<div className="nl-line"></div></h2>
                <h2 className="nl-link" onClick={() => scrollToElement("education")}>Education & Background<div className="nl-line"></div></h2>
                <h2 className="nl-link" onClick={() => scrollToElement("contact")}>Contact<div className="nl-line"></div></h2>
            </div>
        </div>
    );
}

export default NavLarge;