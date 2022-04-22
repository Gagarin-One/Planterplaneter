import React from "react";
import s from './Products.module.scss'
const Products = (props) => {
  
  return (
    <div className={s.wrapper}>
      {props.ArrayOfProducts.map((item) => {return <div className={s.ProductWrapper}>
        <img src={item.image}/>
        <div>{item.title}</div>
        <b>{item.price}</b>
      </div>
      })}
    </div>
  )
}
export default Products