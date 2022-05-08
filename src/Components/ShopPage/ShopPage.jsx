import { useSelector } from "react-redux"
import { getArrayOfProducts } from "../../Reducer.tsx"
import Products from "../Products/Products.tsx"

let ShopPage = () => {
  let ArrayOfProducts = useSelector((state) => state.MainReducer.ArrayOfProducts)
  return (
    <div>
      <Products ArrayOfProducts={ArrayOfProducts} request={getArrayOfProducts}/>
    </div>
  )
}
export default ShopPage