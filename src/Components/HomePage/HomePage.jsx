import React from 'react'
import { NavLink } from 'react-router-dom'
import Products from '../Products/Products'
import s from './HomePage.module.scss'
const HomePage = () => {
  return(
    <div>
      <div className={s.FrontImage}>
        <img src='/Img/FrontImage.svg'/>
      </div>
      <div className={s.NavigationWithPictures}>
        <img className={s.workshop} src='/Img/Workshops_navigate.svg'/>
        <img className={s.about} src='/Img/About_navigate.svg'/>
        <img className={s.contact} src='/Img/Contact_navigate.svg'/>
        <img className={s.spaces} src='/Img/Spaces_navigate.svg'/>
        <div></div>
      </div>
      <b className={s.Products}>Products</b>
      <div>
        <Products/>
      </div>
      <div className={s.MoreButton}>
      <NavLink to='' style={{ textDecoration: 'none' }} >
        <div>SEE MORE</div>
      </NavLink>
      
      </div>
      <div className={s.footer}>
        <div className={s.footerWrapper}>
        <NavLink style={{ textDecoration: 'none' }}  to='../HomePage/HomePage.jsx'>
          <b >Home</b>
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
        </div >
        <p>Designkollektivet,
           Jægersborgsgade 5 2200 København N DENMARK  PHONE: +45 30 22 82 20     EMAIL: kaja@kajaskytte.dk CVR: 36353481</p>
        <img src='/Img/Footer_flower.png'/>
        <div className={s.pay}>
          <img className={s.jcb} src='/Img/jcb.png'/>
          <img className={s.visa} src='Img/visa.png'/>
          <img src='Img/mobilepay.png'/>
          <img src='Img/amex.png'/>
        </div>
      </div>
      <img src='/Img/line.png'/>
    </div> 
  )
}
export default HomePage