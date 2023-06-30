import Card from './Card';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

function CardList() {
    const state = useSelector((state) => state.items);

    const filterItems = createSelector(
        [(state) => state.data, (state) => state.searchTerm],
        (data, searchTerm) => {
            if (searchTerm !== '' && searchTerm !== 'All')
                return data.filter((item) => item.tags.includes(searchTerm));
            else return data;
        }
    );
    const items = filterItems(state);

    const renderCards = items.map((work) => {
        return <Card key={work.id} title={work.title} tags={work.tags} link={work.link} />;
    });

    return <div className="works__list">{renderCards}</div>;
}

export default CardList;
