import s from './AboutPage.module.scss';

let About = () => {
  return (
    <div>
      <div className={s.SpacesHead}>
        <div className={s.HeadImg}>
          <img src="Img/About/1_About.png"/>
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
            <img src="Img/About/2_About.png"/>
          </div>
      </div>
      <div className={s.cartWrapperLeft}>
          <div className={s.unitImage}>
            <img src="Img/About/3_About.png"/>
          </div>
          <div className={s.text}>
            <p className={s.title}>GUESTapart/aarhus Hotel</p>
            <p className={s.description}>
              We are proud to show our planteplaneter in this beautiful hotel, GUESTapart/aarhus. Our Planteplaneter  is decorating restaurant and rooms.
              Interior concept development and styling by ULF & DAMSHOLT
            </p>
            <p></p>
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
            <img src="Img/About/4_About.png"/>
          </div>
      </div>
      <div className={s.unit}>
      <p >EXHIBITION</p>
      </div>
      <div className={s.cartWrapper}>
          <div className={s.text}>
            <p className={s.title}>Georg Jensen Milano Fair 2015</p>
            <p className={s.description}>
            Planteplaneter were featured at Georg Jensen’s stand at the Milano Fair 2015, hanging in a adorable little rustic restaurant – Taglio Dinner.
            They added a special twist to the dinner table, creating a natural ice breaker for the attending guests.

            Stylist: Pernille Vest
            </p>
            <p></p>
          </div>
          <div className={s.unitImage}>
            <img src="Img/About/5_About.png"/>
          </div>
      </div>
      <div className={s.cartWrapper}>
          <div className={s.text}>
            <p className={s.title}>Dome of visions</p>
            <p className={s.description}>
            Blad Journal opening. Dome of Visions in Copenhagen 2015.
            </p>
            <p></p>
          </div>
          <div className={s.unitImage}>
            <img src="Img/About/6_About.png"/>
          </div>
      </div>
    </div>
  )
}
export default About