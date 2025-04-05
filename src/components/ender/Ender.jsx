import './Ender.css';

const Ender = () => {
    const currentYear = new Date().getFullYear();
    
    return(
        <div className="ender">
            <p className="ender-p">
                Copyright &copy; {currentYear} by
                <a href="https://www.lederdavid.com/" className="ender-a"> David Leder</a>
            </p>
            <p className="ender-p">
                All rights reserved
            </p>
        </div>
    );
}

export default Ender;