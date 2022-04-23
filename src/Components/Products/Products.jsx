import React from "react";
import s from './Products.module.scss'
const Products = () => {
  const ArrayOfProducts = [
    {id:1,title:'CRASSULA HALO PLANTEPLANET',price:399,image:'/Img/1_product_image.svg'},
    {id:1,title:'CRASSULA HALO PLANTEPLANET',price:399,image:'/Img/1_product_image.svg'},
    {id:1,title:'CRASSULA HALO PLANTEPLANET',price:399,image:'/Img/1_product_image.svg'},

]
  return (
    <div className={s.wrapper}>
      {ArrayOfProducts.map((item) => {return <div className={s.ProductWrapper}>
        <img src={item.image}/>
        <div>{item.title}</div>
        <b>{item.price}</b>
      </div>
      })}
    </div>
  )
}
export default Products