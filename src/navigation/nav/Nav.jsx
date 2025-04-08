import { useEffect, useState } from 'react';
import './Nav.css';
import NavLarge from '../navLarge/NavLarge';
import NavSmall from '../navSmall/NavSmall';

const Nav = () => {
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
        <div className="nav">
            {isLargeScreen ? <NavLarge /> : <NavSmall />}
        </div>
    );
};

export default Nav;