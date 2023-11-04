//fonts
import './components/fonts/neuvegrotesque-regular.ttf';

//Main-pages
import { Portfolio } from './pages/Portfolio';
import { Info } from './pages/Info';

//Works-pages
import { BooLink } from './pages/BooLink';
import { GovernCash } from './pages/GovernCash';
import { Takk } from './pages/Takk';
import { YolUzmani } from './pages/YolUzmani';
import { Seaside } from './pages/Seaside';
import { CommerceAssist } from './pages/CommerceAssist';
import { Addictional } from './pages/Addictional';
import { Routes, Route } from 'react-router-dom';
import { Cursor } from './components/Cursor';

export const App = () => {
    return (
        <>
            <Cursor />
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/Info" element={<Info />} />
                <Route path="/Boolink" element={<BooLink />} />
                <Route path="/GovernCash" element={<GovernCash />} />
                <Route path="/Takk" element={<Takk />} />
                <Route path="/YolUzmani" element={<YolUzmani />} />
                <Route path="/Seaside" element={<Seaside />} />
                <Route path="/CommerceAssist" element={<CommerceAssist />} />
                <Route path="/AddictionalTasks" element={<Addictional />} />
            </Routes>
        </>
    );
};
