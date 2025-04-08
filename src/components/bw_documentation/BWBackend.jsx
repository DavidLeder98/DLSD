import './BWDocumentation.css';


const BWBackend = () => {
    return(
        <div className="bw-part">
            <h2 className="bw-h2">Backend</h2>
            <div className="bw-content">
                <div className="bw-section">
                    <h3 className="bw-h3">Robust Data Managment</h3>
                    <p className="bw-p">Book Wyrm’s back end is built using .NET Core, ensuring high performance and scalability. The application relies on Entity Framework to manage database operations efficiently, providing seamless integration with SQL databases and enabling features like CRUD operations for books, bundles, user data and much more.</p>
                </div>
                <div className="bw-section">
                    <h3 className="bw-h3">Secure Foundation</h3>
                    <p className="bw-p">To secure the platform, I implemented Identity Framework for authentication and authorization. User authentication is managed via secure cookies, ensuring privacy and session integrity. Role-based authorization divides access into two distinct roles: User and Admin. Regular users can browse and purchase books, while admins have additional privileges to manage products, bundles, and the structure of the website.</p>
                </div>
            </div>
        </div>
    );
}

export default BWBackend;