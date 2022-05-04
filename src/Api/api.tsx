import axios from "axios"
import { Product } from '../Reducer';


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

export const GetShoppingCard = () => {
  return axios.get<getProductsType>(`https://624fd576f0ae10a8ea4fba2f.mockapi.io/shoppingCard`).then((response) => {return response.data})
}

export const ProductToShoppingCard = (obj:Product) => {
  return axios.post<Product>(`https://624fd576f0ae10a8ea4fba2f.mockapi.io/shoppingCard`, obj).then((response)=>{return response.data})
}

export const DeleteProductFromShoppingCard = (id:number) => {
  return axios.delete<number>(`https://624fd576f0ae10a8ea4fba2f.mockapi.io/shoppingCard/?id=${id}`).then((response) => {return response.data})
}

export const UpdateQuantity = (obj:Product,id:number) => {
  return axios.put<number>(`https://624fd576f0ae10a8ea4fba2f.mockapi.io/shoppingCard/?id=${id}`,obj).then((response) => {return response.data})
}