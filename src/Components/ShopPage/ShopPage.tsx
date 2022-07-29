import { useSelector } from "react-redux"
import { getArrayOfProducts } from "../../Store/Reducer"
import Products from "../Products/Products"
import { StateType } from '../../Store/Store';

let ShopPage = () => {
  const ArrayOfProducts = useSelector((state:StateType) => state.MainReducer.ArrayOfProducts)
  return (
    <div>
      <Products ArrayOfProducts={ArrayOfProducts} request={getArrayOfProducts}/>
    </div>
  )
}
export default ShopPage