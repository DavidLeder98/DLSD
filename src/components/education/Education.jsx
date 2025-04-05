import './Education.css';

const Education = () => {
    return(
        <div className="education" id="education">
            <h2 className="edu-h2">Education and Prior Work</h2>
            <div className="edu-content">
                <div className="edu-col">
                    <h3 className="edu-h3">Degree:</h3>
                    <p className="edu-p">
                        University of Novi Sad, Faculty of Medicine: <br />
                        Bachelor's in Radiologic Technology
                    </p>
                    <h3 className="edu-h3">Experience:</h3>
                    <ul className="edu-ul">
                        <li className="edu-li">1 Year as Freelance Software Developer</li>
                        <li className="edu-li">1 Year as a Nuclear Medicine Tech. at the Institute of Oncology of Vojvodina</li>
                        <li className="edu-li">4 Years as an ICU / Resuscitation Tech. at the Clinical Centre of Vojvodina</li>
                    </ul>
                </div>
                <div className="edu-col">
                    <h3 className="edu-h3">Why I'm moving to IT:</h3>
                    <p className="edu-p">Over the years as a Medical Tech, be that in critical care or radiology, I’ve found myself drawn to technology. Learning to code has been a way for me to turn that curiosity into a new career path.</p>
                    <p className="edu-p">I love the challenge of building something from scratch and the satisfaction of seeing it work. I’m excited to transition into IT, where I can combine my problem-solving skills with a passion for creating and learning.</p>
                </div>
            </div>
        </div>
    );
}

export default Education;