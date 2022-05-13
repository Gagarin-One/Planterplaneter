import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import s from './App.module.scss'
import Footer from './Components/footer/Footer';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Product from './Components/Product/Product';
import ShopPage from './Components/ShopPage/ShopPage';
import Workshops from './Components/WorkshopsPage/Workshop'
import ShoppingCard from './Components/ShoppingCard/ShoppingCard';
import Spaces from './Components/SpacesPage/Spaces';
import About from './Components/AboutPage/AboutPage'

function App() {
  let [counter, setCounter] = useState(1)
  
  return (
    <div className={s.App}>
      <Header/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Shopping_card" element={<ShoppingCard counter={counter} changeCounter={setCounter}/>}/>
        <Route path='/Spaces' element={<Spaces/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Shop' element={<ShopPage/>}/>
        <Route path='/Workshops' element={<Workshops/>}/>
        <Route path='/Products/:id' element={<Product counter={counter} changeCounter={setCounter}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
