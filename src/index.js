import './index.css';
import App from './App/App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Store/Store.tsx'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <Provider store={store}>
      <ScrollToTop/>
      <App />
    </Provider>
  </HashRouter>
);