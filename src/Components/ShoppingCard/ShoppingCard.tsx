import { Dispatch, FC, useEffect } from "react";
import s from './ShoppingCard.module.scss';
import { StateType } from '../../Redux/Redux';
import { useDispatch, useSelector } from "react-redux";
import { GetShoppingCardArray,DeleteProductFromShoppingCard,UpdateQuantityInCard, Product } from '../../Redux/Reducer';
import { useNavigate } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

type ShoppingCardType = {}

const ShoppingCard:FC<ShoppingCardType> = () => {
  const initialized = useSelector((state:StateType) => state.MainReducer.isInitialized)
  const ShoppingCardArray = useSelector((state:StateType) => state.MainReducer.ShoppingCard)
  const navigate = useNavigate()
  const dispatch:Dispatch<any> = useDispatch()

  let sumPrice = () => { 
    let sum:number = 0;
    for (let i = 0; ShoppingCardArray.length > i; i++) {
      sum += ShoppingCardArray[i].data.price
    }
    return sum
  }
  
  let remove = (id:number) => {
    dispatch(DeleteProductFromShoppingCard(id))
  }

  const OnIncrease = (Product:Product) => {
    let dataObj = {ProductsCount:Product.data.ProductsCount + 1}
    let obj = {...Product,...{data:{...Product.data,...dataObj}}}
    dispatch(UpdateQuantityInCard(obj))

  }
  const OnDecrease = (Product:Product) => {
    let dataObj = {ProductsCount:Product.data.ProductsCount - 1}
    let obj = {...Product,...{data:{...Product.data,...dataObj}}}
    if (Product.data.ProductsCount > 1) {
      dispatch(UpdateQuantityInCard(obj))
    }
  }

  useEffect(() =>{
    dispatch(GetShoppingCardArray())
  },[])
  
  if(ShoppingCardArray.length === 0) {
    return <div className={s.emptyWrapper}>
        <div className={s.didntOrder}>You didn't order anything</div>
      </div> 
      }
  if (initialized === false) {
    return <Preloader/>
  }

  return <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.left}>
          <img src='Img/ShopIcon.svg'/>
          <p>Shopping card</p>
        </div>
      </div>
      <div className={s.ProductWrapper}>
        {ShoppingCardArray.map((Product:Product) =>
        {return <div className={s.Product}>

          <div className={s.ProductImage}>
            <img src={Product.data.image}/>
          </div>

          <div>{Product.data.title}</div>

          <div className={s.counter}>

            <div className={s.Increase} onClick={() => OnIncrease(Product)}>+</div>
              <div>{Product.data.ProductsCount}</div>
            <div className={s.Decrease} onClick={() => OnDecrease(Product)}>-</div>

          </div>
          <div className={s.Price}>{Product.data.price}</div>
          <svg onClick={()=>remove(Product.data.ProductId)} className={s.remove} width="32" height="32" viewBox="0 0 32 32" fill="#D7D7D7" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" fill="white" stroke="#D7D7D7" stroke-width="2"/>
            <path d="M19.7479 17.9557L17.4993 15.7071L19.7479 13.4585C20.1618 13.0446 20.1618 12.3734 19.7479 11.9595C19.334 11.5455 18.6628 11.5455 18.2488 11.9595L16.0002 14.2081L13.7516 11.9595C13.3377 11.5455 12.6665 11.5455 12.2526 11.9595C11.8386 12.3734 11.8386 13.0446 12.2526 13.4585L14.5012 15.7071L12.2526 17.9557C11.8386 18.3696 11.8386 19.0409 12.2526 19.4548C12.6665 19.8687 13.3377 19.8687 13.7516 19.4548L16.0002 17.2062L18.2488 19.4548C18.6628 19.8687 19.334 19.8687 19.7479 19.4548C20.1618 19.0409 20.1618 18.3696 19.7479 17.9557Z" />
            </svg>
        </div>})}
      </div>
      <div className={s.bottomPanel}>
        <div className={s.leftTotal}>
          <p>Total count: {ShoppingCardArray.length} pieces</p>
          <button onClick={() => navigate(-1)} className={s.Back}>Go back</button>
        </div>
        <div className={s.rightTotal}>
          <p>Total price: {sumPrice()}</p>
          <button className={s.PayNow}>Pay now</button>
        </div>      
      </div>      
    </div>
}
export default ShoppingCard