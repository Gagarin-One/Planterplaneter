import React from "react";
import { ThunkAction } from "redux-thunk";
import { getProduct, GetArrayOfProducts } from '../Api/api.tsx';
import { ActionsTypePattern, StateType } from './Redux';

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
  CurrentProduct:{} as Product
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

    default:
      return state
  }
}

export const Actions = {
  getArrayOfProducts: (Products:Array<Product>) => ({type:'getArrayOfProducts', Products } as const),
  getProductItem: (Product:Product) => ({type:'getProduct', Product } as const)
}

export type ActionType = ActionsTypePattern<typeof Actions>

export type ThunkActionType = ThunkAction<Promise<void>,StateType,unknown,ActionType>

export const getProductItem = (id:number):ThunkActionType => {
  return async (dispatch) => {
    let response = await getProduct(id);
    dispatch(Actions.getProductItem(response))
  }
}

export const getArrayOfProducts = () :ThunkActionType =>{
  return async (dispatch) =>{
    let response = await GetArrayOfProducts()
    dispatch(Actions.getArrayOfProducts(response))
  }
}

export default MainReducer