import Button from '../components/Button';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Accordion from '../components/Accordion';

//PAGE CONTENT
import ExpRender from '../content/ExpRender';
import EducationRender from '../content/EducationRender';
import CertificationsRender from '../content/CertificationsRender';
import SkillsRender from '../content/SkillsRender';
import TollsRender from '../content/TollsRender';

function Info() {
    const items = [
        {
            id: 1,
            label: 'Experience',
            content: <ExpRender />,
        },
        {
            id: 2,
            label: 'Education',
            content: <EducationRender />,
        },
        {
            id: 3,
            label: 'Certifications',
            content: <CertificationsRender />,
        },
        {
            id: 4,
            label: 'Skills',
            content: <SkillsRender />,
        },
        {
            id: 5,
            label: 'Tolls',
            content: <TollsRender />,
        },
    ];

    return (
        <>
            <Navigation />
            <div className="info">
                <section className="info__intro">
                    <div className="header">
                        <h1>Info</h1>
                        <div>
                            <Button tag="Graphic Designer" primary />
                            <Button tag="UI/UX" primary />
                        </div>
                    </div>
                    <p className="description">
                        UI/UX designer, graphic designer and artist. Graduated with a Master's
                        degree in Fine Arts, specializing in Publication Design from the Faculty of
                        Arts at Jan Kochanowski University in Kielce. Also holds a Engineer's degree
                        in Industrial Design, specializing in Industrial Form Design from the
                        Faculty of Mechatronics and Machine Building at the Kielce University of
                        Technology. Currently pursuing a postgraduate degree in Art Therapy at the
                        Higher College of Vocational Education in Wrocław. Actively involved in the
                        community of the SPPS "Zdrowy Tumlin" Association, where she conducts art
                        classes for children. Passionate about art, psychology and neuroaesthetics.
                    </p>
                    <div className="contact">
                        <div>
                            <img src="assets/email.svg" alt="email" />
                            <p>odej.studio@gmail.com</p>
                        </div>
                        <div>
                            <img src="assets/phone.svg" alt="phone-number" />
                            <p>+48 790 503 306</p>
                        </div>
                        <div>
                            <img src="assets/link.svg" alt="linktr" />
                            <p>linktr.ee/justynaodej</p>
                        </div>
                    </div>
                    <img className="author" src="assets/picture.png" alt="author" />
                </section>
                <div className="info__resume info__resume--mobile">
                    <Accordion items={items} />
                </div>
                <div className="info__resume info__resume--desktop">
                    <div>
                        <h1>Experience</h1>
                        <ExpRender />
                    </div>
                    <div>
                        <h1>Skills</h1>
                        <SkillsRender />
                    </div>
                    <div>
                        <h1>Education</h1>
                        <EducationRender />
                    </div>
                    <div>
                        <h1>Certifications</h1>
                        <CertificationsRender />
                    </div>
                    <div>
                        <h1>Tools</h1>
                        <TollsRender />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Info;
