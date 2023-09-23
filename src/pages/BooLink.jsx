import Button from '../components/Button';
import Link from '../components/Link';
import { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';
import { useIsScrolled } from '../hooks/useIsScrolled';
import { Slogans } from '../data/slogans';
import SlogansSlider from '../components/SlogansSlider';
import SlogansStatic from '../components/SlogansStatic';

function BooLink() {
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
                    <h1>Boo.link</h1>
                    <div className="tags">
                        <Button tag="UI/UX" primary />
                        <Button tag="Collaborations" primary />
                        <Button tag="Case Study" primary />
                    </div>
                    <div className="link">
                        <img src="assets/link.svg" alt="link" />
                        <a href="https://boo.link">boo.link</a>
                    </div>
                </div>
                <div className="work__overview">
                    <div className="description">
                        <div>
                            <div className="work__box work__box--primary">Challenge</div>
                            <p>
                                Re-design the boo.link website and create a set of backgrounds for
                                their templates. Enhance the overall visual appeal of the website
                                and provide a range of attractive backgrounds that would complement
                                the templates.
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
                                The primary goal of the project was to revamp the boo.link website
                                and improve its aesthetics. The aim was to create a visually
                                appealing and user-friendly interface that would attract and engage
                                users. Additionally, the goal was to develop a collection of
                                backgrounds that would enhance the visual impact of the templates
                                offered on the website.
                            </p>
                        </div>
                    </div>
                    <div className="images">
                        <div
                            ref={myRef}
                            style={{ transform: `translateY(${isVisible && scrollTop}px)` }}
                        >
                            <img
                                className="images__img images__img--first"
                                src="assets/boolink/boo-link-left.png"
                                alt="smartphone_left"
                            />
                        </div>
                        <div style={{ transform: `translateY(-${isVisible && scrollTop}px)` }}>
                            <img
                                className="images__img images__img--second"
                                src="assets/boolink/boo-link-right.png"
                                alt="smartphone_right"
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
                    <div className="slogans slogans--mobile">
                        <SlogansSlider slogans={Slogans.Boolink} />
                    </div>
                    <div className="slogans slogans--desktop">
                        <SlogansStatic slogans={Slogans.Boolink} />
                    </div>
                </div>

                <div className="work__result">
                    <div className="work__box work__box--primary">Result</div>
                    <p>
                        Throughout the design process, iterative feedback loops were conducted to
                        refine and improve the designs. The team ensured that the new visuals
                        aligned with the intended goals of the website and provided a cohesive and
                        visually engaging experience for the users. By following this design
                        process, the boo.link website was successfully redesigned, incorporating new
                        visual elements and offering an attractive set of backgrounds for their
                        templates.
                    </p>
                    <img
                        className="work__result--mobile"
                        src="assets/boolink/boo-link03-mobile.png"
                        alt="boolink-mobile"
                    />
                    <img
                        className="work__result--desktop"
                        src="assets/boolink/boo-link04-desktop.png"
                        alt="boolink-mobile"
                    />
                </div>
            </div>
        </div>
    );
}

export default BooLink;
