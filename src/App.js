import { Route,Routes } from 'react-router-dom';
import s from './App.module.scss'
import Footer from './Components/footer/Footer';
import Header from './Components/Header/Header.tsx';
import HomePage from './Components/HomePage/HomePage.tsx';
import Product from './Components/Product/Product.tsx';
import Products from './Components/Products/Products.tsx';
import ShoppingCard from './Components/ShoppingCard/ShoppingCard.tsx';
function App() {
  return (
    <div className={s.App}>
      <Header/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Shopping_card" element={<ShoppingCard/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Products/:id' element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
