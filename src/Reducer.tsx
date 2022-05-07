import React from "react";
import { ThunkAction } from "redux-thunk";
import { getProduct, GetArrayOfProducts,GetShoppingCard,ProductToShoppingCard,UpdateQuantityInShopCard,UpdateQuantityInArrayOfProducts,DeleteProductFromCard  } from './Api/api.tsx';
import { ActionsTypePattern, StateType } from './Redux/Redux.tsx';


export type Product = {
  id: number,
  title: string,
  price: number,
  image: string,
  quantity:number
  ProductsCount: number
}

type InitialStateType = typeof initialState;

const initialState = {
  ArrayOfProducts:[{
    id: 1,
    title: "CRASSULA HALO PLANTEPLANET",
    price: 399,
    image: "/Img/1_product_image.svg"
   }] as Array<Product>,
  CurrentProduct:{} as Product,
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
    case 'changeCounterInCurrentProduct':
      return{
        ...state,CurrentProduct:action.CurrentProdObj
      }
    // case 'getProduct':
    //   for (let i = 0; i < state.ArrayOfProducts.length; i++) {
    //     if (state.ArrayOfProducts[i].id === action.ProductId){
          
    //         let p = state.ArrayOfProducts[i]
    //       return p
    //     }
    //   }
    //   return{
    //     ...state,CurrentProduct:p
    //   }
      
    case 'updateQuantityInCard':
      return{
        ...state,
        ShoppingCard:state.ShoppingCard.map(m => {
          if (m.id === action.UpdateId) {
            return{...m, ...action.obj}
          }
          return m;
        })
      }
    case 'updateQuantityInProducts':
      return{
        ...state,
        ArrayOfProducts:state.ArrayOfProducts.map(m => {
          if (m.id === action.UpdateId) {
            return{...m, ...action.obj}
          }
          return m;
        })
      }

    default:
      return state
  }
}

export const Actions = {
  getArrayOfProducts: (Products:Array<Product>) => ({type:'getArrayOfProducts', Products } as const),
  getProduct: (Product:Product) => ({type:'getProduct', Product } as const),
  GetShoppingCardArray:(CardArray:Array<Product>) => ({type:'getCardArray', CardArray} as const),
  AddToShoppingCard: (addToCard:Product) => ({type:'addToShoppingCard',addToCard} as const),
  DeleteProductFromShoppingCard: (deleteId:number) => ({type:'deleteProductFromShoppingCard', deleteId} as const),
  changeCounterInArrayOfProduct: (CounterId:number,num:number) => ({type:'changeCounterInArrayOfProduct', CounterId, num} as const),
  changeCounterInCurrentProduct: (CurrentProdObj:Product) => ({type:'changeCounterInCurrentProduct', CurrentProdObj} as const),
  
  UpdateQuantityInCard: (obj:Product,UpdateId:number) => ({type:'updateQuantityInCard', obj, UpdateId} as const),
  UpdateQuantityInProducts: (obj:Product,UpdateId:number) => ({type:'updateQuantityInProducts', obj, UpdateId} as const)
}

export type ActionType = ActionsTypePattern<typeof Actions>

export type ThunkActionType = ThunkAction<Promise<void>,StateType,unknown,ActionType>

export const getRequestedProductItem = (id:number):ThunkActionType => {
  return async (dispatch) => {
    let response = await getProduct(id);
    for(let i = 0; i < response.length; i++) {
      dispatch(Actions.getProduct(response[i]));
    }
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
    DeleteProductFromCard(id)
    dispatch(Actions.DeleteProductFromShoppingCard(id))
  }
}
export const UpdateQuantityInCard = (obj:Product):ThunkActionType =>{
  return async (dispatch,getState) =>{
    // UpdateQuantityInShopCard(obj,id)
    UpdateQuantityInArrayOfProducts(obj)
    if(getState().MainReducer.ShoppingCard.length > 0) { UpdateQuantityInShopCard(obj)}
    // dispatch(Actions.UpdateQuantityInCard(obj,id))
    dispatch(Actions.changeCounterInCurrentProduct(obj))
    dispatch(Actions.UpdateQuantityInProducts(obj,obj.id))
    dispatch(Actions.UpdateQuantityInCard(obj,obj.id))
  }
}

export default MainReducer
export type MainReducerType = typeof MainReducer