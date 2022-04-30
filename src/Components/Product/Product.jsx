import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { getProductItem } from "../../Redux/Reducer.tsx";
import s from './Product.module.scss'

const Product = () => {
  let CurrentProduct = useSelector((state) => state.MainReducer.CurrentProduct)
  const dispatch = useDispatch()
  const Params = useParams()
  const currentId = parseFloat(Params.id)

  useEffect(() =>{
    
    dispatch(getProductItem(currentId))
  },[])

return (
  <div>
    <div>{CurrentProduct.map((product) =>{return <div className={s.wrapper}>
      <img src={product.image}/>
      <div className={s.information}>
        <b className={s.title}>{product.title}</b>
        <div className={s.price}>{product.price}</div>
        <div className={s.addBlock}>
          <button className={s.addToCard}>add to card</button>
          <div className={s.counter}>
            <div>+</div>
            <div>1</div>
            <div>-</div>
          </div>
        </div>
        <div className={s.description}>
          <p>
            <b>Planteplaneter</b> are small handmade design “planets” of soil with succulents growing out of them. They are made to hang from windows, ceilings, furniture etc.
          </p>
          <p>
            The design is based on traditional Japanese techniques, with an added modern twist. Therefore it is a poetic and decorative suspension system, that offers an alternative to the ordinary houseplant
          </p>
          <b>How to take care of the plant</b>
          <p>
            Planteplaneter is easy to water. You do it by dipping it in a bowl for ten minutes every two weeks or so. However on hot summer days it must be watered every week.
          </p>
          <b>Sizes (measured by the diameter of the coconut ball)</b>
          <p>
            Note that sizes may vary slightly
            
          </p>
          <div className={s.sizes}>
            <b>Medium: App. 10 cm</b>
            <b>Large: App. 13 cm</b>
            <b>X-Large: App. 20 cm</b>
          </div>
          <b>Shipping</b>
          <p>
            Free shipping for purchases over 398 DKK in Denmark
            Shipping once a week with GLS (Denmark) or UPS (rest of Europe)
          </p>
        </div>
    
      </div>
      
    </div>
    })}
    </div>
    <div className={s.alsoLike}>
      <b>YOU MIGHT ALSO LIKE</b>
      <div className={s.alsoImage}>
        <NavLink to='/Products/7'>
          <img src='/Img/Products/Crassula-smallleaf-planteplaneter-kajaskytte-hanginggarden-greenliving-danishdesign-565x565.png'/>
        </NavLink>
        <NavLink to='/Products/7'>
          <img src='/Img/Products/crassula-large-kokadama-planteplaneter-kajaskytte-565x565.png'/>
        </NavLink>
        <NavLink to='/Products/7'>
          <img src='/Img/Products/halo_plante_planteplanet_kajaSkytte_brass_planteplaneter_ring-565x565.png'/>
        </NavLink>
        
      </div>
      <button>SEE MORE</button>
    </div>
  </div>
)
}

export default Product