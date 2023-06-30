import Button from './Button';
import Link from './Link';

function Card({ title, tags, link }) {
    const renderTags = tags.map((tag) => {
        return <Button key={tag} tag={tag} primary />;
    });

    const assets = `${link.toLowerCase()}.png`;

    return (
        <Link to={'/' + link}>
            <div onClick={() => window.scrollTo({ top: 0 })} className="card">
                {link !== '' ? (
                    <img
                        className="card__image"
                        src={`assets/component-assets/${assets}`}
                        alt="card_picture"
                    />
                ) : (
                    <img
                        className="card__image"
                        src={`assets/component-assets/soon.jpg`}
                        alt="card_picture"
                    />
                )}
                <h1 className="card__title">{title}</h1>
                <div className="card__tags">{renderTags}</div>
            </div>
        </Link>
    );
}

export default Card;
