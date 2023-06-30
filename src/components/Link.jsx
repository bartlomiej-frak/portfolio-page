import useNavigation from '../hooks/use-navigation';

function Link({ to, children, section }) {
    const { navigate } = useNavigation();

    const handleClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            if (section) {
                window.open(`/document/${to}`, '_blank').scrollTo({ top: 542 });
            } else window.open(`/document/${to}`, '_blank');
        }
        e.preventDefault();

        navigate(to, section);
    };

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a onClick={handleClick}>{children}</a>
    );
}

export default Link;
