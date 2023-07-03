import { useState, useEffect } from 'react';

export function useIsScrolled() {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = (event) => {
            setScrollTop(window.scrollY * 0.1);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTop]);

    return scrollTop;
}
