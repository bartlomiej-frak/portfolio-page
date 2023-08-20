import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import CardList from '../components/CardList';
import FilterList from '../components/FilterList';

function Portfolio() {
    return (
        <>
            <Navigation />
            <div className="portfolio">
                <div className="portfolio__header">
                    <div className="images">
                        <img
                            className="images--mobile"
                            src="assets/logo-mobile.svg"
                            alt="logo-mobile"
                        />
                        <img
                            className="images--desktop"
                            src="assets/logo-desktop.svg"
                            alt="logo-desktop"
                        />
                    </div>
                    <h2>Creative UI/UX & Graphic Designer</h2>
                </div>
                <div className="portfolio__hero">
                    <p className="intro">
                        <span>hello</span>, I am Justyna Odej an{' '}
                        <span>
                            ui<span className="slash">/</span>ux <span className="and">&</span>{' '}
                            graphic designer{' '}
                        </span>
                        based in Poland, in love with creating friendly designs and user's
                        experiences.
                    </p>
                    <p className="description">
                        I approach my work with love and enthusiasm, always striving to produce
                        visually stunning designs that make a meaningful impact.
                    </p>
                </div>
                <div className="portfolio__navigation">
                    <h1>Works</h1>
                    <div className="filters filters--desktop">
                        <FilterList />
                    </div>
                </div>
                <div className="portfolio__works">
                    <CardList />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Portfolio;
