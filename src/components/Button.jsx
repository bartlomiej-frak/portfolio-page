import className from 'classnames';

export const Button = ({ tag, primary, secondary, ...rest }) => {
    const classes = className(rest.className, {
        primary: primary,
        secondary: secondary,
    });

    return (
        <button {...rest} className={classes}>
            {tag}
        </button>
    );
};
