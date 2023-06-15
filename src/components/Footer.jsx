import Link from './Link';

function Footer() {
    return (
        <div className="footer__wrapper">
            <footer className="footer">
                <h1 className="footer__title">
                    <Link to="/">JUSTYNA ODEJ</Link>
                </h1>
                <ul className="footer__links">
                    <li>
                        <Link to="/">WORKS</Link>
                    </li>
                    <li>
                        <Link to="/Info">INFO</Link>
                    </li>
                </ul>
                <ul className="footer__socials">
                    <li>
                        <a href="https://www.instagram.com/justynaodej/">
                            <img src="./assets/instagram.png" alt="linktree" />
                            <img
                                className="link__hover"
                                src="./assets/instagram_lavend.png"
                                alt="linktree"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://linktr.ee/justynaodej">
                            <img src="./assets/vector.png" alt="linktree" />
                            <img
                                className="link__hover"
                                src="./assets/vector_lavend.png"
                                alt="linktree"
                            />
                        </a>
                    </li>
                </ul>
                <p className="copyright">
                    ©2023 <span>odej.studio</span> all right reserved.
                </p>
            </footer>
        </div>
    );
}

export default Footer;
