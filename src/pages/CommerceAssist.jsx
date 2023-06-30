import '../styles/page-styles/commerce-assist-page.scss';
import Button from '../components/Button';
import Link from '../components/Link';
import { useRef, useState, useEffect } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';

function CommerceAssist() {
    let myRef = useRef();
    let isVisible = useIsVisible(myRef);

    const [scrollTop, setScrollTop] = useState(0);

    //Animation on Scroll
    useEffect(() => {
        const handleScroll = (event) => {
            setScrollTop(window.scrollY * 0.05);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTop]);

    return (
        <div className="work commerce">
            <div className="work__topbar work__topbar--mobile"></div>
            <div className="work__content">
                <Link to="/" section="works">
                    <div className="close">
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
                    <h1>Commerce Assist</h1>
                    <div className="tags">
                        <Button tag="UI/UX" primary />
                        <Button tag="Collaborations" primary />
                        <Button tag="Case Study" primary />
                    </div>
                    <div className="link">
                        <img src="assets/link.svg" alt="link" />
                        <a href="https://commerceassist.com/">commerceassist.com</a>
                    </div>
                </div>
                <div className="work__overview">
                    <div className="description">
                        <div>
                            <div className="work__box work__box--primary">Challenge</div>
                            <p>
                                The challenge in this project was to create a wireframe design that
                                effectively showcased the functionality of the Commerce Assist
                                platform. The goal was to provide a visual representation of the
                                platform's features and user interactions in order to facilitate the
                                development process and ensure a seamless user experience.
                            </p>
                            <ul>
                                <li>UI Design</li>
                            </ul>
                        </div>
                        <div>
                            <div className="work__box work__box--secondary">Goal</div>
                            <p>
                                The idea behind the Commerce Assist website was to present the
                                platform as a comprehensive solution for businesses to streamline
                                their e-commerce operations. The website aimed to convey a sense of
                                efficiency, reliability, and user-friendliness. It needed to provide
                                a clear understanding of the platform's capabilities and highlight
                                its benefits for businesses.
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
                                src="assets/commerce/commerce-01.png"
                                alt="notebook-commerceassist"
                            />
                        </div>
                    </div>
                </div>
                <div className="work__result commerce__result">
                    <div className="work__box work__box--primary commerce__box">Result</div>
                    <p>
                        Throughout the development process, feedback and iterations were carried out
                        in collaboration with the Tasarlab team to refine the wireframe design and
                        incorporate their expertise and insights. The wireframes served as a
                        foundation for the development team to implement the desired features and
                        functionalities of the Commerce Assist platform. By utilizing the
                        capabilities of Figma, the design team successfully created wireframes that
                        effectively presented the functionality and user interactions of the
                        Commerce Assist platform. The resulting wireframe design provided a clear
                        roadmap for the development team and facilitated the creation of a
                        user-friendly and intuitive platform for e-commerce businesses.
                    </p>
                    <img
                        className="work__result"
                        src="assets/commerce/2.jpg"
                        alt="commerceassist"
                    />
                    <img
                        className="work__result"
                        src="assets/commerce/3.jpg"
                        alt="commerceassist"
                    />
                    <img
                        className="work__result"
                        src="assets/commerce/4.jpg"
                        alt="commerceassist"
                    />
                    <img
                        className="work__result"
                        src="assets/commerce/5.jpg"
                        alt="commerceassist"
                    />
                    <img
                        className="work__result"
                        src="assets/commerce/6.jpg"
                        alt="commerceassist"
                    />
                    <img
                        className="work__result"
                        src="assets/commerce/7.jpg"
                        alt="commerceassist"
                    />
                    <img
                        className="work__result"
                        src="assets/commerce/8.jpg"
                        alt="commerceassist"
                    />
                    <img
                        className="work__result"
                        src="assets/commerce/9.jpg"
                        alt="commerceassist"
                    />
                </div>
            </div>
        </div>
    );
}

export default CommerceAssist;
