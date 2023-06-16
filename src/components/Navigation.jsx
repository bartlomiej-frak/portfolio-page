import Link from './Link';
import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 80 && window.innerWidth <= 1140) {
            setScrolled(true);
        } else if (offset > 720 && window.innerWidth >= 1140) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    let navbarClasses = ['nav'];

    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    return (
        <>
            <nav className={navbarClasses.join(' ') + ' mobile'}>
                <Link className="mobile__title" to="/">
                    JUSTYNA ODEJ
                </Link>
                <FiMenu className="mobile__menu" />
            </nav>
            <nav className={navbarClasses.join(' ') + ' desktop'}>
                <div className="desktop__wrapper">
                    <div className="desktop__title">
                        <Link to="/">JUSTYNA ODEJ</Link>
                    </div>
                    <ul className="desktop__links">
                        <li className="desktop__link">
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
