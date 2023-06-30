//fonts
import './components/fonts/neuvegrotesque-regular.ttf';

//Main-pages
import Route from './components/Route';
import Portfolio from './pages/Portfolio';
import Info from './pages/Info';

//Works-pages
import BooLink from './pages/BooLink';
import GovernCash from './pages/GovernCash';
import Takk from './pages/Takk';
import YolUzmani from './pages/YolUzmani';
import Seaside from './pages/Seaside';
import CommerceAssist from './pages/CommerceAssist';
import AddictionalTasks from './pages/Addictional';

function App() {
    return (
        <>
            <Route path="/">
                <Portfolio />
            </Route>
            <Route path="/Info">
                <Info />
            </Route>
            <Route path="/Boolink">
                <BooLink />
            </Route>
            <Route path="/GovernCash">
                <GovernCash />
            </Route>
            <Route path="/Takk">
                <Takk />
            </Route>
            <Route path="/YolUzmani">
                <YolUzmani />
            </Route>
            <Route path="/Seaside">
                <Seaside />
            </Route>
            <Route path="/CommerceAssist">
                <CommerceAssist />
            </Route>
            <Route path="/AddictionalTasks">
                <AddictionalTasks />
            </Route>
        </>
    );
}

export default App;
