import Button from '../components/Button';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function Info() {
    return (
        <>
            <Navigation />
            <div className="container">
                <section className="about">
                    <div className="about__header">
                        <h1>Info</h1>
                        <div>
                            <Button tag="Graphic Designer" />
                            <Button tag="UI/UX" />
                        </div>
                    </div>
                    <p className="about__info">
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
                    <div className="about__contact">
                        <img src="assets/mail.png" alt="envelope" />
                        <p>odej.studio@gmail.com</p>
                        <img src="assets/phone.png" alt="phone-number" />
                        <p>+48 790 503 306</p>
                        <img src="assets/link.png" alt="linktree-logo" />
                        <p>linktr.ee/justynaodej</p>
                    </div>
                    <img className="about__picture" src="assets/picture.png" alt="author" />
                </section>
                <section className="experience">
                    <div className="experience__title">
                        <p>Experience</p>
                    </div>
                    <div className="experience__list">
                        <div>
                            <p>
                                Conducting original artistic workshops SPPS "Zdrowy Tumlin"
                                Association
                            </p>
                            <p>10.2022 - aktualnie</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Turpis sollicitudin ac eget
                            mattis velit amet duis nisl.
                        </p>
                        <div>
                            <p>Freelancer</p>
                            <p>10.2022 - present</p>
                        </div>
                        <p>
                            Product photography, branding, web design, graphic design, painting and
                            drawing
                        </p>
                        <div>
                            <p>
                                UI/UX Designer - Internship, Erasmus + Boosmart Digital Marketing
                                Agency, Istanbul, Turkey
                            </p>
                            <p>11.2021 - 09.2022</p>
                        </div>
                        <p>
                            Projects I worked on - websites for Yol Uzmanı and TurkNet Blog Project
                            - received nominations and main awards in the prestigious Golden Spider
                            Awards (Altın Örümcek) 2022 competition in Turkey. I also collaborated
                            on projects for companies such as Jumbo, Paygo, Profen OZAN, Seaside
                            Juicery, GovernCash+ (Arute Solutions), TAKK, Doğrula - Gerçeği Yakala.
                            I also carried out design tasks for Tubegrow - YouTube SEO & Growth
                            platform, Commerce Assist - e-commerce website management platform,
                            Boo.link, Fancy Tweet.
                        </p>
                    </div>
                </section>
                <section className="skills">
                    <div className="skills__title">
                        <p>Skills</p>
                        <p>Education</p>
                    </div>
                    <div className="skills__description">
                        <img src="assets/skills_01.png" alt="skills-images" />
                        <p>
                            Higher College of Vocational Education 2023 - present Postgraduate
                            studies: Art Therapy (online)
                        </p>
                        <p>
                            Jan Kochanowski University in Kielce, Faculty of Arts 2019 - 2022
                            Master's degree: Fine Arts (specialization: publishing graphics)
                        </p>
                        <img src="assets/skills_02.png" alt="skills-images" />
                        <p>"Fotografika" School of Photography 10.2020 - 01.2021 Photography</p>
                        <p>
                            other: teamwork; attention to detail; quick problem-solving and
                            decision-making; good work organization; project management;
                        </p>
                        <p>
                            Kielce University of Technology 2015 - 2019 Engineer's degree:
                            Industrial Design (specialization: industrial form design)
                        </p>
                    </div>
                </section>
                <section className="tools">
                    <div>Tools</div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Info;
