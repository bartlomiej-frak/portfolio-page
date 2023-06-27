//fonts
import './components/fonts/neuvegrotesque-regular.ttf';

import Route from './components/Route';
import Portfolio from './pages/Portfolio';
import Info from './pages/Info';
import BooLink from './pages/BooLink';

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
        </>
    );
}

export default App;
