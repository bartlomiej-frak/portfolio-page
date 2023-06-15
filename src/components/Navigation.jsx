import Link from './Link';

function Navigation() {
    return (
        <div className="nav__wrapper">
            <nav className="nav">
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
            </nav>
        </div>
    );
}

export default Navigation;
