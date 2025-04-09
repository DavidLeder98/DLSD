import { useEffect, useState } from 'react';
import Hero from './Hero';
import HeroMobile from './HeroMobile';
import './HeroSelector.css';

const HeroSelector = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1201);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1201);
        };

        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="hero-selector">
            {isLargeScreen ? <Hero /> : <HeroMobile />}
        </div>
    );
};

export default HeroSelector;