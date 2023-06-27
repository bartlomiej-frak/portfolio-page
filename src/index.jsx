import './index.scss';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationProvider } from './context/navigation';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <NavigationProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </NavigationProvider>
);
