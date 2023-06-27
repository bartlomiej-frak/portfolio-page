//fonts
import './components/fonts/Aeonik-Thin.otf';
import './components/fonts/Aeonik-Light.otf';
import './components/fonts/Aeonik-Regular.otf';
import './components/fonts/Aeonik-Medium.otf';

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
