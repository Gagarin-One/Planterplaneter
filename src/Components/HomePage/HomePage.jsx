import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Products from '../Products/Products'
import s from './HomePage.module.scss'
import {useSelector,useDispatch} from 'react-redux'
import { getArrayOfProducts } from '../../Redux/Reducer.tsx'
import Footer from '../footer/Footer'
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
    </div> 
    </div> 
  )
}
export default HomePage