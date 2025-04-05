import BWBackend from './BWBackend';
import BWFrontend from './BWFrontend';
import BWDeployment from './BWDeployment';
import './BWDocumentation.css';

const BWDocumentation = () => {
    return(
        <div className="bw-doc">
            <BWBackend />
            <BWFrontend />
            <BWDeployment />
        </div>
    );
}

export default BWDocumentation;