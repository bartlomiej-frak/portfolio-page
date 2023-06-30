import { useDispatch } from 'react-redux';
import { changeSearchTag } from '../store';

function FilterList() {
    const dispatch = useDispatch();

    const handleFilterTag = (e) => {
        dispatch(changeSearchTag(String(e.target.value)));
    };

    return (
        <div>
            <ul>
                <li>
                    <input type="submit" value="All" onClick={handleFilterTag} />
                    <img src="assets/logo-small.svg" alt="small-logo" />
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
