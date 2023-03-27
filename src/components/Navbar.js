import './styles.scss';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {
    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({ path: resolvedPath.pathname, end: true });

        return (
            <li className={`nav__link nav__link--${isActive ? 'active' : ''}`}>
                <Link to={to} {...props}>
                    {children}
                </Link>
            </li>
        );
    }

    return (
        <nav>
            <Link to="/" className="author-name">
                Justyna
            </Link>
            <ul>
                <CustomLink to="/portfolio">Portfolio</CustomLink>
                <CustomLink to="/about">About me</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
        </nav>
    );
};

export default Navbar;
