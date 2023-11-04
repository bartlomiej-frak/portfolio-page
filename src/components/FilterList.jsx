import { useDispatch } from 'react-redux';
import { changeSearchTag } from '../store';

export const FilterList = () => {
    const dispatch = useDispatch();

    const handleFilterTag = (e) => {
        dispatch(changeSearchTag(String(e.target.value)));
    };

    return (
        <div>
            <ul>
                <li>
                    <button type="submit" value="All" onClick={handleFilterTag}>
                        All
                    </button>
                </li>
                <li>
                    <button type="submit" value="UI/UX" onClick={handleFilterTag}>
                        UI/UX
                    </button>
                </li>
                <li>
                    <button type="submit" value="Collaborations" onClick={handleFilterTag}>
                        Collaborations
                    </button>
                </li>
                <li>
                    <button type="submit" value="Case Study" onClick={handleFilterTag}>
                        Case Study
                    </button>
                </li>
                <li>
                    <button type="submit" value="Wireframes" onClick={handleFilterTag}>
                        Wireframes
                    </button>
                </li>
            </ul>
        </div>
    );
};
