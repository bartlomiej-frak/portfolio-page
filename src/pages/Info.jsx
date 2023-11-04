import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { Accordion } from '../components/Accordion';

//PAGE CONTENT
import { ExpRender } from '../content/ExpRender';
import { EducationRender } from '../content/EducationRender';
import { CertificationsRender } from '../content/CertificationsRender';
import { SkillsRender } from '../content/SkillsRender';
import { TollsRender } from '../content/TollsRender';

export const Info = () => {
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
                        <h1>info</h1>
                        <div>
                            <Button tag="Graphic Designer" primary />
                            <Button tag="UI/UX" primary />
                        </div>
                    </div>
                    <p className="description">
                        Hello! I'm Justyna Odej, a UI/UX designer, graphic designer, and artist.
                        With a Master's degree in Fine Arts, specializing in Publication Design, and
                        an Engineer's degree in Industrial Design, I have a strong foundation in
                        visual communication. Currently pursuing a postgraduate degree in Art
                        Therapy, I combine my passion for art, psychology, and design. I actively
                        engage with the SPPS "Zdrowy Tumlin" Association, conducting art classes for
                        children. Additionally, I work on projects related to visual identification
                        and UI design. Inspired by the connection between design and human
                        perception, I strive to create meaningful, user-centered experiences.
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
                            <a href="https://linktr.ee/justynaodej">linktr.ee/justynaodej</a>
                        </div>
                    </div>
                    <img className="author" src="assets/picture.png" alt="author" />
                </section>
                <div className="info__resume info__resume--mobile">
                    <Accordion items={items} />
                </div>
                <div className="info__resume info__resume--desktop">
                    <div className="first_section">
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
};
