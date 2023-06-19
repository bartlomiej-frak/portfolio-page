import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import CardList from '../components/CardList';

function Portfolio() {
    return (
        <>
            <Navigation />
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
                <section className="works">
                    <div className="works__header">
                        <h1>Works</h1>
                        <ul className="works__filter">
                            <li>
                                <span>*</span>All
                            </li>
                            <li>Collaborations</li>
                            <li>Concepts</li>
                            <li>Graphic Design</li>
                        </ul>
                    </div>
                    <CardList />
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Portfolio;
