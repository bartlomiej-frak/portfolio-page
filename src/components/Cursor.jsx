import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

const Cursor = () => {
    return (
        <AnimatedCursor
            outerSize={20}
            outerScale={1.5}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
                width: '1px',
                height: '1px',
                cursor: 'auto',
                backgroundColor: 'rgb(206, 197, 255)',
            }}
            outerStyle={{
                background: 'rgb(206, 197, 255)',
                transition: '.2s ease-out',
            }}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
            ]}
        />
    );
};

export default Cursor;
