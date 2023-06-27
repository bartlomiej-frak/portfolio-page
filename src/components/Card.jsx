import Button from './Button';
import Link from './Link';

function Card({ title, tags, link }) {
    const renderTags = tags.map((tag) => {
        return <Button key={tag} tag={tag} primary />;
    });

    return (
        <Link to={'/' + link}>
            <div onClick={() => window.scrollTo({ top: 0 })} className="card">
                <h1 className="card__title">{title}</h1>
                <div className="card__tags">{renderTags}</div>
            </div>
        </Link>
    );
}

export default Card;
