import Button from '../components/Button';
import Link from '../components/Link';
import { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';
import { useIsScrolled } from '../hooks/useIsScrolled';

function Seaside() {
    let myRef = useRef();
    let isVisible = useIsVisible(myRef);

    //Animation on Scroll
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
                    <h1>Seaside Juicery</h1>
                    <div className="tags">
                        <Button tag="UI/UX" primary />
                        <Button tag="Collaborations" primary />
                        <Button tag="Case Study" primary />
                    </div>
                    <div className="link">
                        <img src="assets/link.svg" alt="link" />
                        <a href="https://www.seasidejuicery.com/">seasidejuicery.com</a>
                    </div>
                </div>
                <div className="work__overview">
                    <div className="description">
                        <div>
                            <div className="work__box work__box--primary">Challenge</div>
                            <p>
                                The challenge in this project was to design an E-commerce website
                                for Seaside Juicery that would provide a seamless shopping
                                experience for customers. The goal was to create an interface that
                                is visually appealing, user-friendly, and optimized for all devices.
                                Additionally, the project involved collaborating with the Tasarlab
                                team to design all the pages except for the Homepage and Products
                                page.
                            </p>
                            <ul>
                                <li>Product vision</li>
                                <li>UI Design</li>
                                <li>Designed website for desktop and mobile</li>
                            </ul>
                        </div>
                        <div>
                            <div className="work__box work__box--secondary">Goal</div>
                            <p>
                                The idea behind the Seaside Juicery E-commerce website was to create
                                a fresh and vibrant online platform that reflects the brand's values
                                and promotes its products effectively. The website aimed to capture
                                the essence of a beachside experience, offering a delightful and
                                convenient way for customers to explore and purchase the company's
                                range of juices.
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
                                src="assets/seaside/seaside-01.png"
                                alt="notebook-seasidejuicery"
                            />
                        </div>
                    </div>
                </div>
                <div className="work__result">
                    <div className="work__box work__box--primary">Result</div>
                    <p>
                        Throughout the development process, close collaboration with the Tasarlab
                        team ensured that the designs seamlessly integrated with the existing
                        Homepage and Products page, maintaining consistency across the entire
                        website. By leveraging the capabilities of Figma, the design team was able
                        to create a visually engaging and user-centric E-commerce interface for
                        Seaside Juicery. The result was a website that provided an enjoyable
                        shopping experience, reflected the brand's values, and effectively showcased
                        the range of products.
                    </p>
                    <img
                        className="work__result--mobile"
                        src="assets/seaside/seaside-02.png"
                        alt="seasidejuicery-mobile"
                    />
                    <img
                        className="work__result--desktop"
                        src="assets/seaside/seaside-03-desktop.png"
                        alt="seasidejuicery-desktop"
                    />
                </div>
            </div>
        </div>
    );
}

export default Seaside;
