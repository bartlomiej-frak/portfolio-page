import Navigation from '../components/Navigation';
import Button from '../components/Button';
import { FiX } from 'react-icons/fi';
import Link from '../components/Link';
import { useRef, useState, useEffect } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';

function BooLink() {
    let myRef = useRef();
    let isVisible = useIsVisible(myRef);

    const [isMobile, setIsMobile] = useState(false);
    const [translation, setTranslation] = useState();

    //Animation on Scroll
    const handleScroll = () => {
        setTranslation(window.scrollY * 0.1);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    //Navbar Mobila / Desktop
    const handleViewChange = () => {
        if (window.innerWidth <= 1040) setIsMobile(true);
        else setIsMobile(false);
    };

    useEffect(() => {
        window.addEventListener('resize', handleViewChange);
    }, []);

    return (
        <>
            {!isMobile && <Navigation />}
            <div className="work">
                <div
                    onClick={() => {
                        window.scrollTo({ top: 542 });
                    }}
                >
                    <Link to="/">
                        <FiX className="work__close" />
                    </Link>
                </div>
                <div className="work__header">
                    <h1>Boo.link</h1>
                    <div>
                        <Button tag="UI/UX" primary />
                        <Button tag="Collaborations" primary />
                        <Button tag="Case Study" primary />
                    </div>
                    <div>
                        <img src="assets/link.svg" alt="link" />
                        <a href="http://wwww.takk.com.tr">takk.com.tr</a>
                    </div>
                </div>
                <div className="work__description">
                    <div className="work__goals">
                        <div className="box">Challenge</div>
                        <p>
                            Re-design the boo.link website and create a set of backgrounds for their
                            templates. Enhance the overall visual appeal of the website and provide
                            a range of attractive backgrounds that would complement the templates.
                        </p>
                        <ul>
                            <li>Product vision</li>
                            <li>UI Design</li>
                            <li>Designed website for desktop and mobile</li>
                        </ul>
                        <div className="box box--secondary">Goal</div>
                        <p>
                            The primary goal of the project was to revamp the boo.link website and
                            improve its aesthetics. The aim was to create a visually appealing and
                            user-friendly interface that would attract and engage users.
                            Additionally, the goal was to develop a collection of backgrounds that
                            would enhance the visual impact of the templates offered on the website.
                        </p>
                    </div>
                    <div ref={myRef} className={`work__photos`}>
                        <img
                            style={{
                                animationPlayState: `${translation > 0 && 'paused'}`,
                                transform: `translateY(${isVisible && translation}px)`,
                            }}
                            src="assets/boolink/boo_link1.png"
                            alt="boo_lin_notebook"
                        />
                        <img
                            style={{
                                animationPlayState: `${translation > 0 && 'paused'}`,
                                transform: `translateY(-${isVisible && translation}px)`,
                            }}
                            src="assets/boolink/phone_01.png"
                            alt="smartphone_left"
                        />
                        <img
                            style={{
                                animationPlayState: `${translation > 0 && 'paused'}`,
                                transform: `translateY(-${isVisible && translation}px)`,
                            }}
                            src="assets/boolink/phone_02.png"
                            alt="smartphone_right"
                        />
                    </div>
                </div>
                <div className="work__design">
                    <h1>My Desing Process</h1>
                    <p>Understanding, the needs of the project, making a plan, creating a design</p>
                    <div>
                        <div className="work__slogan">
                            <h2 className="circle">Discover</h2>
                            <span className="underline">
                                <span></span>
                            </span>
                            <p>
                                The initial stage involved gathering information from the internet
                                and understanding the key ideas behind the boo.link website. The
                                team conducted research to grasp the desired aesthetic and target
                                audience. Insights were gathered to align the design with the
                                website's purpose.
                            </p>
                        </div>
                        <div className="work__slogan">
                            <h2 className="circle">Define</h2>
                            <span className="underline">
                                <span className="second"></span>
                            </span>
                            <p>
                                Based on the gathered information, the team collaborated to define
                                the design direction for the website and the background set. Using
                                Figma, wireframes and mockups were created to visualize the proposed
                                changes and ensure a cohesive user experience.
                            </p>
                        </div>
                        <div className="work__slogan">
                            <h2 className="circle">Develop</h2>
                            <span className="underline">
                                <span className="third"></span>
                            </span>
                            <p>
                                Using Figma for the website redesign and Adobe Illustrator for
                                creating the background set, the team executed the design vision.
                                The website was redesigned to incorporate the new visual elements,
                                such as updated typography, color schemes, and improved layout.
                                Simultaneously, the background set was designed to provide a diverse
                                range of appealing options for the templates.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="work__result">
                    <div className="box">Result</div>
                    <p>
                        Throughout the design process, iterative feedback loops were conducted to
                        refine and improve the designs. The team ensured that the new visuals
                        aligned with the intended goals of the website and provided a cohesive and
                        visually engaging experience for the users. By following this design
                        process, the boo.link website was successfully redesigned, incorporating new
                        visual elements and offering an attractive set of backgrounds for their
                        templates.
                    </p>
                    <img src="assets/boolink/boolink_mobile.png" alt="boolink-mobile" />
                </div>
            </div>
        </>
    );
}

export default BooLink;
