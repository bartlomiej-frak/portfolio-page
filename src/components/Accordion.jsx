import { useState } from 'react';

export const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        });
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = (
            <span>
                {isExpanded ? (
                    <img src="assets/minus.svg" alt="minus" />
                ) : (
                    <img src="assets/plus.svg" alt="plus" />
                )}
            </span>
        );

        return (
            <div className="accordion" key={item.id}>
                <div className="accordion__label" onClick={() => handleClick(index)}>
                    <p>{item.label}</p>
                    {icon}
                </div>
                {isExpanded && <>{item.content}</>}
            </div>
        );
    });

    return <div>{renderedItems}</div>;
};
