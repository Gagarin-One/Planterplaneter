import React from "react";
import { Link } from "react-router-dom";
import s from './Header.module.scss'
const Header = () => {
  return (
    <div className={s.Wrapper}>
      <img/>
      <div className={s.SectionsWrapper}>
        <Link to='../HomePage/HomePage.jsx'>
          <p>Home</p>
        </Link>
          
        <Link to='../ShopPage/ShopPage.jsx'>
          <p>Shop</p>
        </Link>

        <Link to='../WorkshopsPage/Workshop.jsx'>
          <p>Workshops</p>
        </Link>

        <Link to='../SpacesPage/Spaces.jsx'>
          <p>Spaces</p>
        </Link>
          
        <Link to='../AboutPage/AboutPage.jsx'>
          <p>About</p>
        </Link>
        
        <Link to='../ContactPage/Contact.jsx'>
          <p>Contact</p>
        </Link>
      </div>
      <div className={s.SideSectionsWrapper}>
        <img/>
        <img/>
        <img/>
        <img/>
        <div>0</div>
      </div>
    </div>
  )
}
export default Header;