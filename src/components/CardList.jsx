import Card from './Card';
import works from '../data/works';

function CardList() {
    const renderCards = works.map((work) => {
        return <Card key={work.id} title={work.title} tags={work.tags} />;
    });

    return <div className="works__list">{renderCards}</div>;
}

export default CardList;
