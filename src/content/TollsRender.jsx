import { Button } from '../components/Button';

export const TollsRender = () => {
    const tags = [
        'Figma',
        'Adobe XD',
        'Wordpress',
        'Asana',
        'InVision',
        'Balsamiq Mockup',
        'Adobe After Effects',
        'Adobe InDesign',
        'Adobe Illustrator',
        'Blender',
    ];

    const renderTags = tags.map((tag) => {
        return <Button key={tag} tag={tag} secondary />;
    });

    return <div className="section tolls">{renderTags}</div>;
};
