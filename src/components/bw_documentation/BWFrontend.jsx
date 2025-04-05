import './BWDocumentation.css';

const BWFrontend = () => {
    return(
        <div className="bw-part">
            <h2 className="bw-h2">Frontend</h2>
            <div className="bw-content">
                <div className="bw-section">
                    <h3 className="bw-h3">Connection to the Back End</h3>
                    <p className="bw-p">The front end of Book Wyrm is built with React and TypeScript, delivering a dynamic and strongly typed user experience. For communication with the back end, Axios is used to handle API requests efficiently, enabling smooth data fetching and updates across the application.</p>
                </div>
                <div className="bw-section">
                    <h3 className="bw-h3">User Friendly Interface</h3>
                    <p className="bw-p">A key feature of the platform is its guest user tracking, which allows visitors to interact with the site without needing to log in. Guest users can browse the catalog, add items to their cart, and maintain their selections throughout their session. The add-to-cart functionality ensures a seamless shopping experience, persisting data locally for guests and syncing with the database for logged-in users. This flexibility creates a user-friendly environment for all visitors.</p>
                </div>
                <div className="bw-section">
                    <h3 className="bw-h3">Admin Panel</h3>
                    <p className="bw-p">The admin panel in Book Wyrm is designed to give users with the "Admin" role full control over the platform's content. Admins can perform CRUD (Create, Read, Update, Delete) operations on books, authors, categories, and bundles. This enables them to easily manage the catalog, keep the inventory organized, and curate bundle offers to enhance the shopping experience. With an intuitive interface, the admin panel streamlines content management, ensuring the platform remains dynamic and up-to-date.</p>
                </div>
            </div>
        </div>
    );
}

export default BWFrontend;