import { Route,Routes } from 'react-router-dom';
import s from './App.module.scss'
import Header from './Components/Header/Header.jsx';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className={s.App}>
      <Header/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
