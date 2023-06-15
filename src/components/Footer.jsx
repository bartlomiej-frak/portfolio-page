function Footer() {
    return (
        <div className="footer__wrapper">
            <footer className="footer">
                <h1 className="footer__title">JUSTYNA ODEJ</h1>
                <ul className="footer__links">
                    <li>PORTFOLIO</li>
                    <li>ABOUT ME</li>
                    <li>CONTACT</li>
                </ul>
                <ul className="footer__socials">
                    <li>
                        <a href="https://www.instagram.com/justynaodej/">
                            <img src="./assets/Instagram.png" alt="instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://linktr.ee/justynaodej">
                            <img src="./assets/linktree.png" alt="linktree" />
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
