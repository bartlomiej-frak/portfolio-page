import '../styles/page-styles/governcash-page.scss';
import Button from '../components/Button';
import Link from '../components/Link';
import { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';
import { useIsScrolled } from '../hooks/useIsScrolled';

function GovernCash() {
    let myRef = useRef();
    let isVisible = useIsVisible(myRef);

    //Animation on Scroll
    const scrollTop = useIsScrolled();

    return (
        <div className="work governcash">
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
                <div className="work__header governcash__header">
                    <h1>GovernCash+</h1>
                    <p>Arute Solutions</p>
                    <div className="tags">
                        <Button tag="UI" primary />
                        <Button tag="Collaborations" primary />
                    </div>
                    <div className="link">
                        <img src="assets/link.svg" alt="link" />
                        <a href="https://governcash.com/">governcash.com</a>
                    </div>
                </div>
                <div className="work__overview">
                    <div className="description">
                        <div>
                            <div className="work__box work__box--primary">Challenge</div>
                            <p>
                                The challenge in this project was to design a Landing Page and
                                conceptualize other pages for GovernCash+, a product developed by
                                Arute Solutions. The goal was to create a visually appealing and
                                responsive website that would effectively showcase the features and
                                benefits of GovernCash+ to its target audience.
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
                                The idea behind the GovernCash+ website was to present the product
                                as a comprehensive solution for managing financial operations in
                                government organizations. The website aimed to convey a sense of
                                professionalism, reliability, and efficiency. It needed to provide a
                                clear overview of the product's key features, highlight its
                                benefits, and establish trust with potential customers.
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
                                src="assets/governcash/governcash-01.png"
                                alt="smartphone_left"
                            />
                        </div>
                    </div>
                </div>
                <div className="work__result">
                    <div className="work__box work__box--primary">Result</div>
                    <p>
                        For the conceptualized pages, a consistent design language was maintained to
                        ensure a seamless user experience throughout the website. These pages were
                        strategically planned to provide more in-depth information about the
                        product, its use cases, customer testimonials, and a clear call-to-action
                        for visitors to take the next step. Throughout the development process,
                        regular feedback and collaboration with the Arute Solutions team were
                        maintained to align the design with their requirements and incorporate their
                        insights and suggestions. By utilizing the capabilities of Figma and Adobe
                        Illustrator, the design team successfully created a visually appealing and
                        responsive Landing Page and conceptualized other pages for GovernCash+. The
                        resulting website effectively communicated the value of GovernCash+ to its
                        target audience, showcased its features, and encouraged visitors to engage
                        with the product.
                    </p>
                    <img
                        className="work__result--mobile"
                        src="assets/governcash/governcash-02.jpg"
                        alt="governcash-mobile"
                    />
                    <img
                        className="work__result--mobile"
                        src="assets/governcash/governcash-03.png"
                        alt="governcash-mobile"
                    />
                    <img
                        className="work__result--desktop"
                        src="assets/governcash/governcash-04-desktop.png"
                        alt="governcash-desktop"
                    />
                </div>
            </div>
        </div>
    );
}

export default GovernCash;
