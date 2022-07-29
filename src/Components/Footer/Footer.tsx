import NavigationLinks from "../NavigationLinks/NavigationLinks";
import s from './footer.module.scss'

const Footer = () => {
return (
  <div>
    <div className={s.footer}>
        <div className={s.footerWrapper}>
          <NavigationLinks Link={'Home'}/>
          <NavigationLinks Link={'Shop'}/>
          <NavigationLinks Link={'Workshops'}/> 
          <NavigationLinks Link={'Spaces'}/> 
          <NavigationLinks Link={'About'}/> 
          <NavigationLinks Link={'Contacts'}/>  
        </div >
        <p className={s.contact}>  PHONE: +45 30 22 82 20 EMAIL: kaja@kajaskytte.dk CVR: 36353481
        </p>
          <img src='Img/Footer_flower.png'/>
          <div className={s.discount}>
            <p> GET 10% OFF SIGN UP FOR</p>
            <p> YOUR NEXT ORDER A NEWSLETTER</p>
          </div>
          <div className={s.payItems}>
            <img className={s.jcb} src='Img/jcb.png'/>
            <img className={s.visa} src='Img/visa.png'/>
            <img src='Img/mobilepay.png'/>
            <img src='Img/amex.png'/>
          </div>
    </div>
  </div>
)
}
export default Footer