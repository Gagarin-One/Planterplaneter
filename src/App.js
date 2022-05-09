import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import s from './App.module.scss'
import Footer from './Components/footer/Footer';
import Header from './Components/Header/Header.tsx';
import HomePage from './Components/HomePage/HomePage.tsx';
import Product from './Components/Product/Product.tsx';
import ShopPage from './Components/ShopPage/ShopPage.jsx';
import Workshops from './Components/WorkshopsPage/Workshop.tsx'
import ShoppingCard from './Components/ShoppingCard/ShoppingCard.tsx';
import Spaces from './Components/SpacesPage/Spaces.tsx';
function App() {
  let [counter, setCounter] = useState(1)
  return (
    <div className={s.App}>
      <Header/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Shopping_card" element={<ShoppingCard counter={counter} changeCounter={setCounter}/>}/>
        <Route path='/Spaces' element={<Spaces/>}/>
        <Route path='/Shop' element={<ShopPage/>}/>
        <Route path='/Workshops' element={<Workshops/>}/>
        <Route path='/Products/:id' element={<Product counter={counter} changeCounter={setCounter}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
