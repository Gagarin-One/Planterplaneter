import { useSelector } from "react-redux"
<<<<<<< HEAD
import { getArrayOfProducts } from "../../Reducer"
import Products from "../Products/Products"
=======
import { getArrayOfProducts } from "../../Reducer.tsx"
import Products from "../Products/Products.tsx"
>>>>>>> 21fa5505a223f75af8ff919ade0741e0a340a1aa

let ShopPage = () => {
  let ArrayOfProducts = useSelector((state) => state.MainReducer.ArrayOfProducts)
  return (
    <div>
      <Products ArrayOfProducts={ArrayOfProducts} request={getArrayOfProducts}/>
    </div>
  )
}
export default ShopPage