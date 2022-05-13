import React, { Dispatch, FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { getRequestedProductItem, AddProductToShoppingCard,UpdateQuantityInCard,Actions } from "../../Reducer";
import s from './Product.module.scss'
import { StateType } from '../../Redux/Redux';

type ProductType = {
  
} 

const Product:FC<ProductType> = () => {
  const CurrentProduct = useSelector((state:StateType) => state.MainReducer.CurrentProduct)
  const ShoppingCard = useSelector((state:StateType) => state.MainReducer.ShoppingCard)

  const dispatch:Dispatch<any> = useDispatch()
  const Params:any = useParams()
  const currentId:number = parseFloat(Params.id)

  useEffect(() =>{
    dispatch(getRequestedProductItem(currentId))
  },[])
  const OnIncrease = () => {
    let dataObj ={...CurrentProduct,...{ProductsCount:CurrentProduct.ProductsCount + 1}}
    let obj = {id:CurrentProduct.ProductId,data:dataObj}
    dispatch(UpdateQuantityInCard(obj,true))
  }

  const OnDecrease = () => {
    let dataObj ={...CurrentProduct,...{ProductsCount:CurrentProduct.ProductsCount - 1}}
    let obj = {id:CurrentProduct.ProductId,data:dataObj}
    if (CurrentProduct.ProductsCount > 1) {
      dispatch(UpdateQuantityInCard(obj,true))
    }
  }

  const AddToCard = () => {
    ShoppingCard.every((obj) => obj.data.ProductId !== CurrentProduct.ProductId) &&
    dispatch(AddProductToShoppingCard({id:CurrentProduct.ProductId,data:CurrentProduct}))
  }
  
  
return (
  <div>
    <div>
      <div className={s.wrapper}>
      <img src={CurrentProduct.image}/>
      <div className={s.information}>
        <b className={s.title}>{CurrentProduct.title}</b>
        <div className={s.price}>{CurrentProduct.price}</div>
        <div className={s.addBlock}>
          <button onClick={() => AddToCard()} className={s.addToCard}>add to card</button>
          <div className={s.counter}>
            <div className={s.Increase} onClick={() => OnIncrease()}>+</div>
            <div>{CurrentProduct.ProductsCount}</div>
            <div className={s.Decrease} onClick={() => OnDecrease()}>-</div>
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
    
    </div>
    <div className={s.alsoLike}>
      <b>YOU MIGHT ALSO LIKE</b>
      <div className={s.alsoImage}>
        <NavLink to='/Products/8'>
          <img src='Img/Products/Crassula-smallleaf-planteplaneter-kajaskytte-hanginggarden-greenliving-danishdesign-565x565.png'/>
        </NavLink>
        <NavLink to='/Products/5'>
          <img src='Img/Products/crassula-large-kokadama-planteplaneter-kajaskytte-565x565.png'/>
        </NavLink>
        <NavLink to='/Products/7'>
          <img src='Img/Products/halo_plante_planteplanet_kajaSkytte_brass_planteplaneter_ring-565x565.png'/>
        </NavLink>
        
      </div>
      <NavLink to='/Shop' style={{ textDecoration: 'none' }}>
      <button>SEE MORE</button>
      </NavLink>
      
    </div>
  </div>
)
}

export default Product