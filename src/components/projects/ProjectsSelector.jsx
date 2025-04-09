import './ProjectsSelector.css';
import Projects from './Projects';
import ProjectsMobile from './ProjectsMobile';
import { useEffect, useState } from 'react';

const ProjectsSelector = () => {
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

    return(
        <div className="proj-selector">
            {isLargeScreen ? <Projects /> : <ProjectsMobile />}
        </div>
    );
}

export default ProjectsSelector;