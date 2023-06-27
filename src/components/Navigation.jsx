import '../styles/Navigation-styles.scss';
import Link from './Link';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import MobileMenu from '../components/MobileMenu';

function Navigation({ section }) {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 79) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const scrollToSection = () => {
        window.scrollTo({
            top: section - 70,
            behavior: 'smooth',
        });
    };

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    let navbarClasses = ['nav'];

    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    if (isOpen) {
        navbarClasses.push('oppened');
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <>
            <nav className={navbarClasses.join(' ') + ' mobile work__mobile'}>
                {isOpen ? (
                    <>
                        <img src="assets/logo.png" alt="page_logo" />
                        <FiX onClick={handleClick} className="mobile__menu" />
                    </>
                ) : (
                    <>
                        <Link className="mobile__title" to="/">
                            JUSTYNA ODEJ
                        </Link>
                        <FiMenu onClick={handleClick} className="mobile__menu" />
                    </>
                )}
            </nav>
            {isOpen && <MobileMenu setIsOpen={setIsOpen} />}

            <nav className={navbarClasses.join(' ') + ' desktop'}>
                <div className="desktop__wrapper">
                    <div className="desktop__title">
                        <Link to="/">JUSTYNA ODEJ</Link>
                    </div>
                    <ul className="desktop__links">
                        <li onClick={scrollToSection} className="desktop__link">
                            <Link to="/">WORK</Link>
                        </li>
                        <li className="desktop__link">
                            <Link to="/Info">INFO</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navigation;
