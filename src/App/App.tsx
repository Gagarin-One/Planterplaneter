import { lazy, Suspense, useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import s from './App.module.scss'
import Header from '../Components/Header/Header';
import Preloader from '../Components/Preloader/Preloader';

const HomePage = lazy(() => import('../Components/HomePage/HomePage'))
const Product = lazy(() => import('../Components/Product/Product'))
const ShopPage = lazy(() => import('../Components/ShopPage/ShopPage'))
const Workshops = lazy(() => import('../Components/WorkshopsPage/Workshop'))
const ShoppingCard = lazy(() => import('../Components/ShoppingCard/ShoppingCard'))
const Spaces = lazy(() => import('../Components/SpacesPage/Spaces'))
const About = lazy(() => import('../Components/AboutPage/About'))
const Search = lazy(() => import('../Components/SearchPage/Search'))
const Contacts = lazy(() => import('../Components/ContactPage/Contact'))
const Footer = lazy(() => import('../Components/Footer/Footer'))

function App() {
  return (
    <div className={s.App}>
      <Header/>
      <Suspense fallback={<div><Preloader/></div>}>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Home" element={<HomePage/>}/>
            <Route path='/Search' element={<Search/>}/>
            <Route path="/Shopping_card" element={<ShoppingCard/>}/>
            <Route path='/Spaces' element={<Spaces/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Shop' element={<ShopPage/>}/>
            <Route path='/Workshops' element={<Workshops/>}/>
            <Route path='/Products/:id' element={<Product/>}/>
            <Route path='/Contacts' element={<Contacts/>}/>
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  );
}

export default App;
