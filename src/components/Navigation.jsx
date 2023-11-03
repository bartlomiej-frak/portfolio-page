import Link from './Link';
import { useEffect, useState } from 'react';
import MobileMenu from '../components/MobileMenu';
import { useIsScrolled } from '../hooks/useIsScrolled';

function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const scrollY = useIsScrolled();

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 79) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
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
            <nav
                style={{
                    background: `rgba(130, 130, 130, ${scrollY < 0.25 ? scrollY * 0.00001 : 0.25})`,
                }}
                className={navbarClasses.join(' ') + ' mobile'}
            >
                {isOpen ? (
                    <>
                        <img
                            className="mobile__logo"
                            src="assets/logo-mobile.svg"
                            alt="page_logo"
                        />
                        <div onClick={handleClick} className="mobile__menu">
                            <img src="assets/mobile-menu/Close.svg" alt="close" />
                        </div>
                    </>
                ) : (
                    <>
                        <Link className="mobile__title" to="/">
                            JUSTYNA ODEJ
                        </Link>
                        <div onClick={handleClick} className="mobile__menu">
                            <img src="assets/mobile-menu/Menu.svg" alt="menu" />
                        </div>
                    </>
                )}
            </nav>
            {isOpen && <MobileMenu setIsOpen={setIsOpen} />}

            <nav
                style={{
                    background: `rgba(130, 130, 130, ${
                        scrollY * 0.025 < 0.25 ? scrollY * 0.025 : 0.25
                    })`,
                }}
                className={navbarClasses.join(' ') + ' desktop'}
            >
                <div className="desktop__wrapper">
                    <div className="desktop__title">
                        <Link to="/">JUSTYNA ODEJ</Link>
                    </div>
                    <ul className="desktop__links">
                        <li className="desktop__link">
                            <Link to="/" section="works">
                                WORK
                            </Link>
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
