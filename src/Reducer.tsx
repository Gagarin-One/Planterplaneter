import React from "react";
import { ThunkAction } from "redux-thunk";
import { getProduct, GetArrayOfProducts,GetShoppingCard,ProductToShoppingCard } from './Api/api.tsx';
import { ActionsTypePattern, StateType } from './Redux/Redux.tsx';


export type Product = {
  id: number,
  title: string,
  price: number,
  image: string
}

type InitialStateType = typeof initialState;

const initialState = {
  ArrayOfProducts:[{
    id: 1,
    title: "CRASSULA HALO PLANTEPLANET",
    price: 399,
    image: "/Img/1_product_image.svg"
   }] as Array<Product>,
  CurrentProduct:[] as Array<Product>,
  ShoppingCard:[] as Array<Product>
}

const MainReducer = (state = initialState, action:ActionType):InitialStateType => {

  switch (action.type) {
    case 'getArrayOfProducts':
      return{
        ...state,ArrayOfProducts:action.Products
      }
    case 'getProduct':
      return{
        ...state,CurrentProduct:action.Product
      }
    case 'getCardArray':
      return{
        ...state,ShoppingCard:action.CardArray
      }
    case 'addToShoppingCard':
      return{
        ...state,ShoppingCard:[...state.ShoppingCard,action.addToCard]
      }
    case 'deleteProductFromShoppingCard':
      return{
        ...state,
        ShoppingCard:state.ShoppingCard.filter((item)=> item.id !== action.deleteId)
      }

    default:
      return state
  }
}

export const Actions = {
  getArrayOfProducts: (Products:Array<Product>) => ({type:'getArrayOfProducts', Products } as const),
  GetProductItem: (Product:Array<Product>) => ({type:'getProduct', Product } as const),
  GetShoppingCardArray:(CardArray:Array<Product>) => ({type:'getCardArray', CardArray} as const),
  AddToShoppingCard: (addToCard:Product) => ({type:'addToShoppingCard',addToCard} as const),
  DeleteProductFromShoppingCard: (deleteId:number) => ({type:'deleteProductFromShoppingCard', deleteId} as const)
}

export type ActionType = ActionsTypePattern<typeof Actions>

export type ThunkActionType = ThunkAction<Promise<void>,StateType,unknown,ActionType>

export const getProductItem = (id:number):ThunkActionType => {
  return async (dispatch) => {
    let response = await getProduct(id);
    dispatch(Actions.GetProductItem(response))
  }
}

export const getArrayOfProducts = () :ThunkActionType =>{
  return async (dispatch) =>{
    let response = await GetArrayOfProducts()
    dispatch(Actions.getArrayOfProducts(response))
  }
}
export const GetShoppingCardArray = ():ThunkActionType =>{
  return async (dispatch) => {
    let response = await GetShoppingCard()
    dispatch(Actions.GetShoppingCardArray(response))
  }
}

export const AddProductToShoppingCard = (obj:Product):ThunkActionType =>{
  return async (dispatch) =>{
    ProductToShoppingCard(obj)
    dispatch(Actions.AddToShoppingCard(obj))
  }
}

export const DeleteProductFromShoppingCard = (id:number):ThunkActionType =>{
  return async (dispatch) =>{
    DeleteProductFromShoppingCard(id)
    dispatch(Actions.DeleteProductFromShoppingCard(id))
  }
}

export default MainReducer
export type MainReducerType = typeof MainReducer