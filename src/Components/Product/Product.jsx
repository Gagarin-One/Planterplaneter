import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductItem } from "../../Redux/Reducer.tsx";

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
    <div>{CurrentProduct.map((product) =>{return <div>
      <img src={product.image}/>
      
    </div>
    })}
    </div>
  </div>
)
}

export default Product