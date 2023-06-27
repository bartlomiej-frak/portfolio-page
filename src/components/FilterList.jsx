import { useDispatch } from 'react-redux';
import { changeSearchTag } from '../store';

function FilterList() {
    const dispatch = useDispatch();

    const handleFilterTag = (e) => {
        dispatch(changeSearchTag(String(e.target.value)));
    };

    return (
        <div className="works__header">
            <h1>Works</h1>
            <ul className="works__filter">
                <li>
                    <input type="submit" value="*All" onClick={handleFilterTag} />
                </li>
                <li>
                    <input type="submit" value="UI/UX" onClick={handleFilterTag} />
                </li>
                <li>
                    <input type="submit" value="Collaborations" onClick={handleFilterTag} />
                </li>
                <li>
                    <input type="submit" value="Case Study" onClick={handleFilterTag} />
                </li>
                <li>
                    <input type="submit" value="Wireframes" onClick={handleFilterTag} />
                </li>
            </ul>
        </div>
    );
}

export default FilterList;
