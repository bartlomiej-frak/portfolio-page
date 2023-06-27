import className from 'classnames';
import '../styles/Button-styles.scss';

function Button({ tag, primary, secondary, ...rest }) {
    const classes = className(rest.className, {
        primary: primary,
        secondary: secondary,
    });

    return (
        <button {...rest} className={classes}>
            {tag}
        </button>
    );
}

export default Button;
