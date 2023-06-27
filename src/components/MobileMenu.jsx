import '../styles/MobileMenu-styles.scss';
import Link from './Link';

function MobileMenu({ setIsOpen }) {
    return (
        <div className="menu">
            <ul className="menu__links">
                <li
                    onClick={() => {
                        setIsOpen(false);
                        window.scrollTo({ top: 542 });
                    }}
                >
                    <Link to="/">Works</Link>
                </li>
                <li
                    onClick={() => {
                        setIsOpen(false);
                    }}
                >
                    <Link to="/Info">Info</Link>
                </li>
            </ul>
            <div className="menu__contact">
                <div>
                    <img src="assets/email.svg" alt="email" />
                    <p>odej.studio@gmail.com</p>
                </div>
                <div>
                    <img src="assets/phone.svg" alt="phone-number" />
                    <p>+48 790 503 306</p>
                </div>
                <div>
                    <img src="assets/link.svg" alt="linktr" />
                    <p>linktr.ee/justynaodej</p>
                </div>
            </div>
            <ul className="menu__socials">
                <li>
                    <a href="https://www.instagram.com/justynaodej/">
                        <img src="./assets/insta.svg" alt="instagram" />
                    </a>
                </li>
                <li>
                    <a href="https://linktr.ee/justynaodej">
                        <img src="./assets/linktr.svg" alt="linktree" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;
