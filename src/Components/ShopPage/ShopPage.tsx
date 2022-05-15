import { useSelector } from "react-redux"
import { getArrayOfProducts } from "../../Redux/Reducer"
import Products from "../Products/Products"
import { StateType } from '../../Redux/Redux';

let ShopPage = () => {
  const ArrayOfProducts = useSelector((state:StateType) => state.MainReducer.ArrayOfProducts)
  return (
    <div>
      <Products ArrayOfProducts={ArrayOfProducts} request={getArrayOfProducts}/>
    </div>
  )
}
export default ShopPage