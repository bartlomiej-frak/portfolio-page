import '../styles/page-styles/takk-page.scss';
import Button from '../components/Button';
import Link from '../components/Link';
import { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';
import { useIsScrolled } from '../hooks/useIsScrolled';

function Takk() {
    let myRef = useRef();
    let isVisible = useIsVisible(myRef);

    //Animation on Scroll
    const scrollTop = useIsScrolled();

    return (
        <div className="work takk">
            <div className="work__topbar work__topbar--mobile"></div>
            <div className="work__content">
                <Link to="/" section="works">
                    <div className={`close ${scrollTop && 'close--fixed'}`}>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="Close">
                                <path
                                    id="Vector"
                                    d="M28 2L2 28"
                                    stroke="white"
                                    stroke-miterlimit="10"
                                    stroke-linecap="square"
                                />
                                <path
                                    id="Vector_2"
                                    d="M28 28L2 2"
                                    stroke="white"
                                    stroke-miterlimit="10"
                                    stroke-linecap="square"
                                />
                            </g>
                        </svg>
                    </div>
                </Link>
                <div className="work__header">
                    <h1>TAKK</h1>
                    <div className="tags">
                        <Button tag="UI/UX" primary />
                        <Button tag="Collaborations" primary />
                        <Button tag="Case Study" primary />
                    </div>
                    <div className="link">
                        <img src="assets/link.svg" alt="link" />
                        <a href="https://takk.com.tr">takk.com.tr</a>
                    </div>
                </div>
                <div className="work__overview takk__overview">
                    <div className="description">
                        <div>
                            <div className="work__box work__box--primary">Challenge</div>
                            <p>
                                The challenge in this project was to improve the user experience of
                                an existing website based on user research findings. The goal was to
                                address pain points and optimize the website to facilitate quick and
                                seamless product purchases.
                            </p>
                            <ul>
                                <li>UI and UX Design</li>
                                <li>Wireframes and User Flow</li>
                            </ul>
                            <p className="tools">Tools: Figma, Balsamiq Mockups 3, Hotjar</p>
                        </div>
                        <div>
                            <div className="work__box work__box--secondary">Goal</div>
                            <p>
                                The primary goal of the project was to enhance the user experience
                                and streamline the product purchase process on the website. By
                                understanding user behaviors and pain points, the aim was to create
                                a more intuitive and efficient interface that would encourage users
                                to complete their purchases with ease.
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
                                src="assets/takk/takk-01.png"
                                alt="notebook-takk"
                            />
                        </div>
                    </div>
                </div>
                <div className="work__design">
                    <div className="header">
                        <h1>My Desing Process</h1>
                        <p>
                            Understanding, the needs of the project, making a plan, creating a
                            design
                        </p>
                    </div>
                    <div className="slogans">
                        <div className="slogan">
                            <h2 className="slogan__circle">Discover</h2>
                            {/* <span className="slogan__underline">
                                <span></span>
                            </span> */}
                            <p>
                                The initial stage involved conducting UX research to gain insights
                                into user behaviors and pain points. The team analyzed heat maps and
                                gathered data to understand how users were interacting with the
                                website.
                            </p>
                        </div>
                        <div className="slogan">
                            <h2 className="slogan__circle">Define</h2>
                            {/* <span className="slogan__underline slogan__underline--second">
                                <span></span>
                            </span> */}
                            <p>
                                Based on the research findings, the team collaborated to define the
                                key areas for improvement. Wireframes were created using Balsamiq
                                Mockups 3 to map out the user journey and identify potential design
                                solutions.
                            </p>
                        </div>
                        <div className="slogan">
                            <h2 className="slogan__circle">Develop</h2>
                            {/* <span className="slogan__underline slogan__underline--third">
                                <span></span>
                            </span> */}
                            <p>
                                Using Figma, proceeded to redesign the website pages, focusing on
                                simplifying the product purchase process. The design solutions were
                                developed and refined iteratively, incorporating user feedback and
                                insights.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="work__result">
                    <div className="work__box work__box--primary">Result</div>
                    <p>
                        Throughout the design process, the team also utilized Hotjar to gather
                        additional user behavior data and validate design decisions. This iterative
                        approach allowed for continuous improvement and optimization of the
                        website's usability. By segregating the information in this way, it becomes
                        easier to understand the challenge faced, the specific goal of the project,
                        and the design process that was followed to address the challenge and
                        achieve the desired goal.
                    </p>
                    <img
                        className="work__result--mobile"
                        src="assets/takk/takk-02.png"
                        alt="boolink-mobile"
                    />
                    <img
                        className="work__result--desktop"
                        src="assets/takk/takk-03-desktop.png"
                        alt="boolink-desktop"
                    />
                </div>
            </div>
        </div>
    );
}

export default Takk;
