export const SlogansStatic = ({ slogans }) => (
    <>
        <div className="slogan">
            <h2 className="slogan__circle">{slogans.firstSlide.title}</h2>
            <span className="slogan__underline">
                <span></span>
            </span>
            <p>{slogans.firstSlide.content}</p>
        </div>
        <div className="slogan">
            <h2 className="slogan__circle">{slogans.secondSlide.title}</h2>
            <span className="slogan__underline slogan__underline--second">
                <span></span>
            </span>
            <p>{slogans.secondSlide.content}</p>
        </div>
        <div className="slogan">
            <h2 className="slogan__circle">{slogans.thirdSlide.title}</h2>
            <span className="slogan__underline slogan__underline--third">
                <span></span>
            </span>
            <p>{slogans.thirdSlide.content}</p>
        </div>
    </>
);
