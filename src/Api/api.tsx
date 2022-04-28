import axios from "axios"
import { Product } from '../Redux/Reducer';


type getProductsType = Array<Product>
export const GetArrayOfProducts = () => {
  return axios.get<getProductsType>('https://624fd576f0ae10a8ea4fba2f.mockapi.io/Products')
  .then((response) => {
    return response.data
  })
}

export const getProduct = (id:number) => {
  return axios.get<Product>(`https://624fd576f0ae10a8ea4fba2f.mockapi.io/Products/?id=${id}`)
  .then((response) => {return response.data})
}

