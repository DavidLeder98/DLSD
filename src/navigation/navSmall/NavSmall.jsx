import './NavSmall.css';
import { useState, useEffect } from "react";
import { useNavigation } from '../../services/NavigationContext';

const NavSmall = () => {
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

    const [isOpen, setIsOpen] = useState(false);

    const toggleBurger = () => {
        setIsOpen(prev => !prev);
    };

    return(
        <div className={`nav-small ${isOpen ? 'show' : ''}`}>
            <div className={`nav-small-content ${scrolled ? "scrolled" : ""}`}>
                <div className="ns-logo">
                    <h1 className={`ns-logo-dl ${scrolled ? "scrolled" : ""}`}>David Leder</h1>
                    <h1 className={`ns-logo-sd ${scrolled ? "scrolled" : ""}`}>[Software Developer]</h1>
                </div>
                <div className="burger" onClick={toggleBurger}>
                    <div className={`burger-stripes ${isOpen ? 'hide' : ''}`}>
                        <div className="burger-stripe"></div>
                        <div className="burger-stripe"></div>
                        <div className="burger-stripe"></div>
                    </div>
                    <div className={`burger-x ${isOpen ? 'show' : ''}`}>
                        <div className="burger-x-1"></div>
                        <div className="burger-x-2"></div>
                    </div>
                </div>
            </div>
            <div className={`menu-cont ${isOpen ? 'show' : ''}`}>
                <div className="menu">
                    <a href="https://www.lederdavid.com/">
                        <h2 className="menu-link">Home<div className="menu-line"></div></h2>
                    </a>
                    <h2 className="menu-link" onClick={() => { scrollToElement("about"); setIsOpen(false);}} >About</h2>
                    <h2 className="menu-link" onClick={() => {scrollToElement("stack"); setIsOpen(false);}}>Tech Stack</h2>
                    <h2 className="menu-link" onClick={() => {scrollToElement("projects"); setIsOpen(false);}}>Projects</h2>
                    <h2 className="menu-link" onClick={() => {scrollToElement("education"); setIsOpen(false);}}>Education & Background</h2>
                    <h2 className="menu-link" onClick={() => {scrollToElement("contact"); setIsOpen(false);}}>Contact</h2>
                </div>
            </div>
        </div>
    );
}

export default NavSmall;