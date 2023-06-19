import Button from '../components/Button';

function TollsRender() {
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
        return <Button tag={tag} secondary />;
    });

    return <div className="resume__section tolls">{renderTags}</div>;
}

export default TollsRender;
