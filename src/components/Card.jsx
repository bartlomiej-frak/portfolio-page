import Button from './Button';

function Card({ title, tags }) {
    const renderTags = tags.map((tag) => {
        return <Button key={tag} tag={tag} primary />;
    });

    return (
        <div className="card">
            <h1 className="card__title">{title}</h1>
            <div className="card__tags">{renderTags}</div>
        </div>
    );
}

export default Card;
