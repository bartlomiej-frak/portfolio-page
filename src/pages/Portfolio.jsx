import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import CardList from '../components/CardList';
import FilterList from '../components/FilterList';
import { useEffect, useRef, useState } from 'react';

function Portfolio() {
    const workSection = useRef();
    const [sectionOffset, setSectionOffset] = useState(0);

    useEffect(() => {
        window.addEventListener('load', setSectionOffset(workSection.current?.offsetTop));
    }, []);

    return (
        <>
            <Navigation section={sectionOffset} />
            <div className="portfolio">
                <header className="hero">
                    <div className="hero__title">
                        <img className="hero__logo" src="assets/logo.png" alt="page_logo" />
                        <h2>Creative UI/UX & Graphic Designer</h2>
                    </div>
                    <div className="hero__description">
                        <h1>
                            Hello, I am Justyna Odej a <span>UI/UX</span> and{' '}
                            <span>graphic designer</span> based in Poland, in love with creating
                            friendly designs and user experiences.
                        </h1>
                        <p>
                            With over 4 years of experience, I approach my work with love and
                            enthusiasm, always striving to produce visually stunning designs that
                            make a meaningful impact.
                        </p>
                    </div>
                </header>
                <section ref={workSection} className="works">
                    <FilterList />
                    <CardList />
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Portfolio;
