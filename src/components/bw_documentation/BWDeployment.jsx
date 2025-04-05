import './BWDocumentation.css';

const BWDeployment = () => {
    return(
        <div className="bw-part">
            <h2 className="bw-h2">Deployment</h2>
            <div className="bw-content">
                <div className="bw-section">
                    <h3 className="bw-h3">Seamless and Professional Hosting</h3>
                    <p className="bw-p">Book Wyrm is deployed with a focus on reliability and accessibility. The back-end API is hosted on Azure, providing a secure and scalable environment for handling requests and managing data. The front end is deployed via Vercel, ensuring fast load times and efficient delivery of static assets. To give the platform a polished, professional feel, a custom DNS is configured, allowing users to access the site through a personalized domain. This deployment strategy ensures a seamless experience for both visitors and administrators.</p>
                </div>
                <div className="bw-section">
                    <h3 className="bw-h3">What I've Learned</h3>
                    <p className="bw-p">Building Book Wyrm has been an invaluable learning experience. I gained a deeper understanding of integrating front-end and back-end technologies, securing user data with authentication and authorization, and implementing efficient state management. Deploying the app taught me how to handle challenges like cross-origin requests and DNS configuration. This project sharpened my problem-solving skills and reinforced the importance of scalability, security, and user-centric design in web development.</p>
                </div>
            </div>
        </div>
    );
}

export default BWDeployment;