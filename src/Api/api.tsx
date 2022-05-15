import axios from "axios"
import { Product } from '../Redux/Reducer';


type getProductsType = Array<Product>
export const GetFourProducts = () => {
  return axios.get<getProductsType>('https://624fd576f0ae10a8ea4fba2f.mockapi.io/Products?page=1&limit=8')
  .then((response) => {
    return response.data
  })
}
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

export const DeleteProductFromCard = (id:number) => {
  return axios.delete<number>(`https://624fd576f0ae10a8ea4fba2f.mockapi.io/shoppingCard/${id}`).then((response) => {return response.data})
}

export const UpdateQuantityInShopCard = (obj:Product,id:number) => {
  return axios.put<number>(`https://624fd576f0ae10a8ea4fba2f.mockapi.io/shoppingCard/${id}`, obj).then((response) => {return response.data})
}

export const UpdateQuantityInArrayOfProducts = (obj:Product,id:number) => {
  return axios.put<number>(`https://624fd576f0ae10a8ea4fba2f.mockapi.io/Products/${id}`, obj).then((response) => {return response.data})
}
