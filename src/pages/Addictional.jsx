import '../styles/page-styles/addictional-tasks-page.scss';
import Button from '../components/Button';
import Link from '../components/Link';

function Addictional() {
    return (
        <div className="work addictional">
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
                <div className="work__header addictional__header">
                    <h1>Addictional Tasks</h1>
                    <div className="tags">
                        <Button tag="Graphic Design" primary />
                        <Button tag="UI/UX" primary />
                        <Button tag="Collaborations" primary />
                    </div>
                </div>
                <div className="work__overview addictional__overview">
                    <div className="description">
                        <h1>TurkNet Blog</h1>
                        <p>
                            My role: Mobile versions of the website, in collaboration with Tasarlab
                            team. Description: TurkNet Blog is a blogging platform that provides
                            valuable content related to telecommunications and technology. In this
                            project, my responsibility was to develop mobile versions of the
                            website. I worked closely with the Tasarlab team to ensure an optimal
                            user experience on mobile devices. The result was the implementation of
                            a responsive design that adapted to different screen sizes, providing
                            users with easy access to the blog content. Our collaboration led
                            TurkNet Blog to win the Spider Web 2022 competition in the Blog of the
                            Year category.
                        </p>
                        <div className="link">
                            <img src="assets/link.svg" alt="link" />
                            <a href="https://turk.net/blog/">turk.net/blog</a>
                        </div>
                    </div>
                    <div className="images">
                        <img
                            className="images__img images__img--mobile"
                            src="assets/addictional/addictional-01-mobile.png"
                            alt="addictional-task"
                        />
                        <img
                            className="images__img images__img--desktop"
                            src="assets/addictional/addictional-01-desktop.png"
                            alt="addictional-task"
                        />
                    </div>
                </div>
                <div className="work__overview addictional__overview">
                    <div className="description">
                        <h1>Fancy Tweet</h1>
                        <p>
                            My role: Creating backgrounds for posts. Description: Fancy Tweet is a
                            platform that allows users to create unique and visually appealing
                            tweets. In this project, I focused on designing attractive and creative
                            backgrounds for the posts. Collaborating with the team, I provided a
                            variety of visually captivating options for Fancy Tweet users. My work
                            helped enrich the content published on the platform, giving it a
                            distinct character and grabbing the attention of the audience.
                        </p>
                        <div className="link">
                            <img src="assets/link.svg" alt="link" />
                            <a href="https://fancytweet.com/">fancytweet.com</a>
                        </div>
                    </div>
                    <div className="images">
                        <img
                            className="images__img images__img--mobile"
                            src="assets/addictional/addictional-02-mobile.png"
                            alt="addictional-task"
                        />
                        <img
                            className="images__img images__img--desktop"
                            src="assets/addictional/addictional-02-desktop.png"
                            alt="addictional-task"
                        />
                    </div>
                </div>
                <div className="work__overview addictional__overview">
                    <div className="description">
                        <h1>Doğrula</h1>
                        <p>
                            My role: Mobile versions of the website, collaboration in visual
                            communication design with Tasarlab team. Description: Doğrula is a
                            platform that enables online identity verification. In this project, my
                            responsibility included developing mobile versions of the website that
                            offered users an intuitive and seamless experience on mobile devices. I
                            collaborated with the Tasarlab team to ensure consistent and visually
                            appealing communication on the website. Our work contributed to creating
                            a professional platform that met user expectations and provided them
                            with easy online identity verification.
                        </p>
                        <div className="link">
                            <img src="assets/link.svg" alt="link" />
                            <a href="https://www.dogrula.org/">dogrula.org</a>
                        </div>
                    </div>
                    <div className="images">
                        <img
                            className="images__img images__img--mobile"
                            src="assets/addictional/addictional-03-mobile.png"
                            alt="addictional-task"
                        />
                        <img
                            className="images__img images__img--desktop"
                            src="assets/addictional/addictional-03-desktop.png"
                            alt="addictional-task"
                        />
                    </div>
                </div>
                <div className="work__overview addictional__overview">
                    <div className="description">
                        <h1>TubeGrow</h1>
                        <p>
                            My role: Mobile versions of the website, collaboration in visual
                            communication design with Tasarlab team. I ensured that the mobile
                            experience was optimized for users, offering seamless navigation and
                            functionality on different mobile devices. Additionally, I contributed
                            to the visual communication design of TubeGrow, including the creation
                            of icons and graphics. Collaborating with the Tasarlab team, we
                            established a cohesive and visually appealing design language that
                            enhanced the overall user experience. By providing intuitive icons and
                            visually engaging graphics, we aimed to make the platform more
                            user-friendly and visually appealing.
                        </p>
                        <div className="link">
                            <img src="assets/link.svg" alt="link" />
                            <a href="https://tubegrow.com/">tubegrow.com</a>
                        </div>
                    </div>
                    <div className="images">
                        <img
                            className="images__img images__img--mobile"
                            src="assets/addictional/addictional-04-mobile.png"
                            alt="addictional-task"
                        />
                        <img
                            className="images__img images__img--desktop"
                            src="assets/addictional/addictional-04-desktop.png"
                            alt="addictional-task"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addictional;
