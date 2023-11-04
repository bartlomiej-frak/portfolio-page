import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MobileMenu } from '../components/MobileMenu';
import { useIsScrolled } from '../hooks/useIsScrolled';
import { HashLink } from 'react-router-hash-link';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scrollY = useIsScrolled();

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    let navbarClasses = ['nav'];

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
                    background: `rgba(130, 130, 130, ${
                        scrollY * 0.03 < 0.2 ? scrollY * 0.02 : 0.25
                    })`,
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
                        scrollY * 0.03 < 0.2 ? scrollY * 0.02 : 0.25
                    })`,
                }}
                className={navbarClasses.join(' ') + ' desktop'}
            >
                <div className="desktop__wrapper">
                    <div className="desktop__title">
                        <HashLink
                            to="/#top"
                            scroll={(el) => window.scrollTo({ top: el.offsetTop - 100 })}
                        >
                            JUSTYNA ODEJ
                        </HashLink>
                    </div>
                    <ul className="desktop__links">
                        <li className="desktop__link">
                            <HashLink to="/#works">WORK</HashLink>
                        </li>
                        <li className="desktop__link">
                            <HashLink
                                to="/Info#top"
                                scroll={(el) => window.scrollTo({ top: el.offsetTop - 100 })}
                            >
                                INFO
                            </HashLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
