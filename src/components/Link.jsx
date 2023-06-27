import useNavigation from '../hooks/use-navigation';

function Link({ to, children }) {
    const { navigate } = useNavigation();

    const handleClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            window.open(`/document/${to}`, '_blank');
        }
        e.preventDefault();

        navigate(to);
    };

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a onClick={handleClick}>{children}</a>
    );
}

export default Link;
