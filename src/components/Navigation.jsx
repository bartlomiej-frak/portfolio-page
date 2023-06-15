import Link from './Link';
import { useEffect, useState } from 'react';

function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 650) {
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
        <nav className={navbarClasses.join(' ')}>
            <div className="nav__content">
                <div className="nav__title">
                    <Link to="/">JUSTYNA ODEJ</Link>
                </div>
                <ul className="nav__links">
                    <li className="nav_link">
                        <Link to="/">WORK</Link>
                    </li>
                    <li className="nav__link">
                        <Link to="/Info">INFO</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
