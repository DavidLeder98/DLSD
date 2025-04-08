import BWBackend from './BWBackend';
import BWFrontend from './BWFrontend';
import BWDeployment from './BWDeployment';
import BWImages from './BWImages';
import './BWDocumentation.css';

const BWDocumentation = () => {
    return(
        <div className="bw-doc">
            <BWBackend />
            <BWFrontend />
            <BWDeployment />
            <BWImages />
        </div>
    );
}

export default BWDocumentation;