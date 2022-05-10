import s from './AboutPage.module.scss';

let About = () => {
  return (
    <div>
      <div className={s.SpacesHead}>
        <div className={s.HeadImg}>
          <img src="/Img/About/1_About.png"/>
        </div>
        
        <div className={s.headDesc}>
          <div className={s.title}>
            <b>S</b>
            <b>PACES</b>  
          </div>
          <p>
            Sometimes planeteplanter are treated as plants other times they’re a part of interior design, see both cases in action.
          </p>
          <p>
          We worked with many different spaces such as hotels and barbershops.Planteplaneter can be a finishing touch not only in your house, but also in your office or your bussiness, if you are a company interested in bulk order, contact me.
          </p>
        </div>
        
      </div>
      <div className={s.unit}>
      <p >INTERIOR</p>
      </div>
      
      <div className={s.cartWrapper}>
          <div className={s.text}>
            <p className={s.title}>Ruberg Jewellery London</p>
            <p className={s.description}>An installation at Ruberg featuring work by Danish architect Kaja Skytte. Skytte will show her intricate Wallstructures and sculptural Planteplaneter – Japanese-inspired plant suspension systems.</p>
            <p>London Design Festival 2016</p>
          </div>
          <div className={s.unitImage}>
            <img src="/Img/About/2_About.png"/>
          </div>
      </div>
      <div className={s.cartWrapper}>
          <div className={s.text}>
            <p className={s.title}>LAB Showroom</p>
            <p className={s.description}>
                Mega Planteplaneter at The Lab creating a green space in a design office environment.
            </p>
            <p></p>
          </div>
          <div className={s.unitImage}>
            <img src="/Img/About/3_About.png"/>
          </div>
        </div>
    </div>
  )
}
export default About