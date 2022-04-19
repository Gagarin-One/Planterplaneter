import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from './Header.module.scss'
const Header = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.MainLogo}>
      <img src='/Img/MainLogo.svg'/>
      </div>
      
      <div className={s.SectionsWrapper}>
        <NavLink style={{ textDecoration: 'none' }}  to='../HomePage/HomePage.jsx'>
          <b>Home</b>
        </NavLink>
          
        <NavLink style={{ textDecoration: 'none' }} to='../ShopPage/ShopPage.jsx'>
          <b>Shop</b>
        </NavLink>

        <NavLink style={{ textDecoration: 'none' }} to='../WorkshopsPage/Workshop.jsx'>
          <b>Workshops</b>
        </NavLink>

        <NavLink style={{ textDecoration: 'none' }} to='../SpacesPage/Spaces.jsx'>
          <b>Spaces</b>
        </NavLink>
          
        <NavLink style={{ textDecoration: 'none' }} to='../AboutPage/AboutPage.jsx'>
          <b>About</b>
        </NavLink>
        
        <NavLink style={{ textDecoration: 'none' }} to='../ContactPage/Contact.jsx'>
          <b>Contact</b>
        </NavLink>
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