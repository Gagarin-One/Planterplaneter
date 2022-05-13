import s from './Preloader.module.scss'
const Preloader =() => {
  return(
    <div className={s.preloader}>
      <img width="500" src="/Img/lazyload.gif"/>
    </div>
  )
}
export default Preloader