import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';
import { useIsScrolled } from '../hooks/useIsScrolled';

export const YolUzmani = () => {
    let myRef = useRef();
    let isVisible = useIsVisible(myRef);

    const scrollTop = useIsScrolled();

    return (
        <div className="work">
            <div className="work__topbar work__topbar--mobile"></div>
            <div className="work__content">
                <Link to="/" section="works">
                    <div className={`close ${scrollTop && 'close--fixed'}`}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <g id="Close">
                                <path
                                    id="Vector"
                                    d="M28 2L2 28"
                                    stroke="white"
                                    strokeMiterlimit="10"
                                    strokeLinecap="square"
                                />
                                <path
                                    id="Vector_2"
                                    d="M28 28L2 2"
                                    stroke="white"
                                    strokeMiterlimit="10"
                                    strokeLinecap="square"
                                />
                            </g>
                        </svg>
                    </div>
                </Link>
                <div className="work__header">
                    <h1>Yol Uzmani</h1>
                    <div className="tags">
                        <Button tag="UI/UX" primary />
                        <Button tag="Collaborations" primary />
                        <Button tag="Case Study" primary />
                    </div>
                    <div className="link">
                        <img src="assets/link.svg" alt="link" />
                        <a href="https://yoluzmani.com/">yoluzmani.com</a>
                    </div>
                </div>
                <div className="work__overview">
                    <div className="description">
                        <div>
                            <div className="work__box work__box--primary">Challenge</div>
                            <p>
                                The challenge in this project was to re-design a Yol Uzmanı website
                                that would effectively showcase the company's expertise and
                                services. Additionally, the project involved creating concepts for
                                other pages of the website.
                            </p>
                            <ul>
                                <li>UI Design</li>
                                <li>Designed website for desktop and mobile</li>
                            </ul>
                        </div>
                        <div>
                            <div className="work__box work__box--secondary">Goal</div>
                            <p>
                                The idea behind the re-branding was to create a visually appealing
                                and user-friendly interface that would engage visitors and
                                communicate the professionalism and success of Yol Uzmanı. The goal
                                was to create a strong online presence for the company and establish
                                it as a leading authority in the industry.
                            </p>
                        </div>
                    </div>
                    <div className="images">
                        <div
                            ref={myRef}
                            style={{ transform: `translateY(${isVisible && scrollTop}px)` }}
                        >
                            <img
                                className="images__img images__img--single"
                                src="assets/yoluzmani/yoluzmani-01.png"
                                alt="notebook-yoluzmani"
                            />
                        </div>
                    </div>
                </div>
                <div className="work__result">
                    <div className="work__box work__box--primary">Result</div>
                    <p>
                        The other pages of the website were also conceptualized and designed,
                        keeping consistency in visual style and user experience. Each page aimed to
                        provide valuable information, showcase the company's expertise, and
                        encourage user engagement. By leveraging the power of Figma and Adobe
                        Illustrator, the design team was able to create visually captivating and
                        functional Landing Page and website concepts that met the goals of Yol
                        Uzmanı. Throughout the project, collaboration with the client and continuous
                        refinement ensured that the final designs aligned with the client's vision
                        and exceeded industry standards.
                    </p>
                    <img
                        className="work__result--mobile"
                        src="assets/yoluzmani/yoluzmani-02.png"
                        alt="yoluzmani-mobile"
                    />
                    <img
                        className="work__result--desktop"
                        src="assets/yoluzmani/yoluzmani-03-desktop.png"
                        alt="yoluzmani-desktop"
                    />
                </div>
            </div>
        </div>
    );
};
