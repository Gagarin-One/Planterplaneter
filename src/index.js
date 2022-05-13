import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/Redux.tsx'
import ScrollToTop from './ScrollToTop/ScrollToTop';

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ScrollToTop/>
      <App />
    </Provider>
  </BrowserRouter>
);