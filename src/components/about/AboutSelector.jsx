import { useEffect, useState } from 'react';
import About from './About';
import AboutMobile from './AboutMobile';
import './About.css';

const AboutSelector = () => {
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
        <div className="about-selector">
            {isLargeScreen ? <About /> : <AboutMobile />}
        </div>
    );
};

export default AboutSelector;