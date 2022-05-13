import { lazy, Suspense, useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import s from './App.module.scss'
import Header from './Components/Header/Header';
import Preloader from './Components/Preloader/Preloader';

const HomePage = lazy(() => import('./Components/HomePage/HomePage'))
const Product = lazy(() => import('./Components/Product/Product'))
const ShopPage = lazy(() => import('./Components/ShopPage/ShopPage'))
const Workshops = lazy(() => import('./Components/WorkshopsPage/Workshop'))
const ShoppingCard = lazy(() => import('./Components/ShoppingCard/ShoppingCard'))
const Spaces = lazy(() => import('./Components/SpacesPage/Spaces'))
const About = lazy(() => import('./Components/AboutPage/AboutPage'))
const Search = lazy(() => import('./Components/Search/Search'))
const Contacts = lazy(() => import('./Components/ContactPage/Contact'))
const Footer = lazy(() => import('./Components/footer/Footer'))

function App() {
  let [counter, setCounter] = useState(1)
  
  return (
    <div className={s.App}>
      <Header/>
      <Suspense fallback={<div><Preloader/></div>}>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path='/Search' element={<Search/>}/>
            <Route path="/Shopping_card" element={<ShoppingCard 
            counter={counter}
            changeCounter={setCounter}/>}/>
            <Route path='/Spaces' element={<Spaces/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Shop' element={<ShopPage/>}/>
            <Route path='/Workshops' element={<Workshops/>}/>
            <Route path='/Products/:id' element={<Product
            counter={counter} 
            changeCounter={setCounter}/>}/>
            <Route path='/Contacts' element={<Contacts/>}/>
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  );
}

export default App;
