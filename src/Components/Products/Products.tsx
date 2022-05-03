import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getArrayOfProducts,getProductItem  } from "../../Reducer.tsx";
import s from './Products.module.scss'

const Products = () => {
  let ArrayOfProducts = useSelector((state) => state.MainReducer.ArrayOfProducts)
  
  let dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getArrayOfProducts())
  },[])
  

  return (
    <div className={s.wrapper}>
      {ArrayOfProducts.map((item) => {return <div key={item.id} className={s.ProductWrapper}>
        <NavLink style={{ textDecoration: 'none' }} to={`/Products/${item.id}`}>
          <div>
            <img src={item.image}/>
            <div>{item.title}</div>
            <b>{item.price}</b>
            
          </div>
        </NavLink>
       
      </div>
      })}
    </div>
  )
}
export default Products