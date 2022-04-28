import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Products from '../Products/Products'
import s from './HomePage.module.scss'
import {useSelector,useDispatch} from 'react-redux'
import { getArrayOfProducts } from '../../Redux/Reducer.tsx'
const HomePage = () => {
  return(
    <div>
  <div>
      <div className={s.FrontImage}>
        <img src='/Img/FrontImage.svg'/>
      </div>
      <div className={s.NavigationWithPictures}>
        <img className={s.workshop} src='/Img/Workshops_navigate.svg'/>
        <img className={s.about} src='/Img/About_navigate.svg'/>
        <img className={s.contact} src='/Img/Contact_navigate.svg'/>
        <img className={s.spaces} src='/Img/Spaces_navigate.svg'/>
        <div className={s.shop}>SHOP</div>
      </div>
      <div className={s.commentWrapper}>
        <div className={s.comment}>
          <img width='29' height='29' src='/Img/quote.svg' />
          <p>We make the planteplaneter by hand in Denmark</p>
        </div>
        <img src='/Img/for_comments.png'/>
      </div>
      <b className={s.Products}>Products</b>
      <div><Products/></div>
      <div className={s.MoreButton}>
      <NavLink to='' style={{ textDecoration: 'none' }}>
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
        <p className={s.contact}>  PHONE: +45 30 22 82 20 EMAIL: kaja@kajaskytte.dk CVR: 36353481</p>
        <img src='/Img/Footer_flower.png'/>
        <div className={s.discount}>
          <p> GET 10% OFF SIGN UP FOR</p>
          <p> YOUR NEXT ORDER A NEWSLETTER</p>
        </div>
        <div className={s.payItems}>
          <img className={s.jcb} src='/Img/jcb.png'/>
          <img className={s.visa} src='Img/visa.png'/>
          <img src='Img/mobilepay.png'/>
          <img src='Img/amex.png'/>
        </div>
      </div>
      <img src='/Img/line.png'/>
    </div> 
    </div> 
  )
}
export default HomePage