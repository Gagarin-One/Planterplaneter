import { Dispatch, FC, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import {Product, ThunkActionType } from "../../Store/Reducer";
import s from './Products.module.scss'
import { StateType } from '../../Store/Store';
import Preloader from "../Preloader/Preloader";

type ProductType = {
  ArrayOfProducts:Array<Product>
  request:()=>ThunkActionType
} 

const Products:FC<ProductType> = ({ArrayOfProducts,request}) => {
const dispatch:Dispatch<any> = useDispatch()
const initialized = useSelector((state:StateType) => state.MainReducer.isInitialized)

useEffect(() =>{
  dispatch(request())
},[])

  
  if (initialized === false) {
    return <Preloader/>
  }
  return (
    <div className={s.wrapper}>
      {ArrayOfProducts.map((item) => {return <div
        key={item.id}
        className={s.ProductWrapper}
        >
        <NavLink style={{ textDecoration: 'none' }} to={`/Products/${item.data.ProductId}`}>
          <div>
            <img src={item.data.image}/>
            <div>{item.data.title}</div>
            <b>{item.data.price}</b>
          </div>
        </NavLink>
      </div>
      })}
    </div>
  )
}
export default Products