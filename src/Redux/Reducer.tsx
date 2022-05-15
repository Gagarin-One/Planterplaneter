import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { getProduct, GetArrayOfProducts,GetShoppingCard,ProductToShoppingCard,UpdateQuantityInShopCard,UpdateQuantityInArrayOfProducts,DeleteProductFromCard,GetFourProducts   } from '../Api/api';
import { ActionsTypePattern, StateType } from './Redux';

export type DataType = {
  ProductId: number
  title: string,
  price: number,
  image: string,
  ProductsCount: number
}
export type Product = {
  id: number,
  data:DataType
}

type InitialStateType = typeof initialState;

const initialState = {
  FourProducts:[] as Array<Product>,
  ArrayOfProducts:[{
    id: 1,
    data:{
      title: "CRASSULA HALO PLANTEPLANET",
    price: 399,
    image: "/Img/1_product_image.svg"
    }
   }] as Array<Product>,
  CurrentProduct:{} as DataType,
  ShoppingCard:[] as Array<Product>,
  isInitialized:false as boolean
}


const MainReducer = (state = initialState, action:ActionType):InitialStateType => {

  switch (action.type) {

    case 'getFourProducts':
      return{
        ...state,FourProducts:action.fourProducts 
      }

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
        ShoppingCard:state.ShoppingCard.filter((item)=> item.data.ProductId !== action.deleteId)
      }
    case 'changeCounterInCurrentProduct':
      return{
        ...state,CurrentProduct:action.CurrentProdObj
      }
    
    case 'updateQuantityInCard':
      return{
        ...state,
        ShoppingCard:state.ShoppingCard.map(m => {
          if (m.data.ProductId === action.UpdateId) {
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
    case 'setInitialize':
      return{
        ...state,isInitialized:action.InitVal
      }

    default:
      return state
  }
}

export const Actions = {
  getFourProducts: (fourProducts:Array<Product>) =>({type:'getFourProducts',fourProducts} as const),
  getArrayOfProducts: (Products:Array<Product>) => ({type:'getArrayOfProducts', Products } as const),
  getProduct: (Product:DataType) => ({type:'getProduct', Product } as const),
  getChangeProduct : (Product:Product) => ({type:'getChangeProduct', Product} as const),
  GetShoppingCardArray:(CardArray:Array<Product>) => ({type:'getCardArray', CardArray} as const),
  AddToShoppingCard: (addToCard:Product) => ({type:'addToShoppingCard',addToCard} as const),
  DeleteProductFromShoppingCard: (deleteId:number) => ({type:'deleteProductFromShoppingCard', deleteId} as const),
  changeCounterInArrayOfProduct: (CounterId:number,num:number) => ({type:'changeCounterInArrayOfProduct', CounterId, num} as const),
  changeCounterInCurrentProduct: (CurrentProdObj:DataType) => ({type:'changeCounterInCurrentProduct', CurrentProdObj} as const),
  UpdateQuantityInCard: (obj:Product,UpdateId:number) => ({type:'updateQuantityInCard', obj, UpdateId} as const),
  UpdateQuantityInProducts: (obj:Product,UpdateId:number) => ({type:'updateQuantityInProducts', obj, UpdateId} as const),
  SetInitialize: (InitVal:boolean) => ({type:'setInitialize', InitVal} as const)
}

export type ActionType = ActionsTypePattern<typeof Actions>

export type ThunkActionType = ThunkAction<Promise<void>,StateType,unknown,ActionType>

export const getRequestedProductItem = (id:number):ThunkActionType => {
  return async (dispatch) => {
    dispatch(Actions.SetInitialize(false))
    let response:any = await getProduct(id);
    for(let i = 0; i < response.length; i++) {
      dispatch(Actions.getProduct(response[i].data))
      dispatch(Actions.SetInitialize(true)) 
    }
  }
}

export const getArrayOfProducts = () :ThunkActionType =>{
  return async (dispatch) =>{
    dispatch(Actions.SetInitialize(false))
    let response = await GetArrayOfProducts()
    dispatch(Actions.getArrayOfProducts(response))
    dispatch(Actions.SetInitialize(true))
  }
}
export const getFourProducts = ():ThunkActionType => {
  return async (dispatch) =>{
    dispatch(Actions.SetInitialize(false))
    let response = await GetFourProducts()
    dispatch(Actions.getFourProducts(response))
    dispatch(Actions.SetInitialize(true))
  }
}
export const GetShoppingCardArray = ():ThunkActionType =>{
  return async (dispatch) => {
    dispatch(Actions.SetInitialize(false))
    let response = await GetShoppingCard()
    dispatch(Actions.GetShoppingCardArray(response))
    dispatch(Actions.SetInitialize(true))
  }
}

export const AddProductToShoppingCard = (obj:Product):ThunkActionType =>{
  return async (dispatch) =>{
    ProductToShoppingCard(obj)
    dispatch(Actions.AddToShoppingCard(obj))
  }
}

export const DeleteProductFromShoppingCard = (id:number):ThunkActionType =>{
  return async (dispatch,getState) =>{
    for (let i = 0; i < getState().MainReducer.ShoppingCard.length; i++)
    {if(getState().MainReducer.ShoppingCard[i].data.ProductId === id){
      DeleteProductFromCard(getState().MainReducer.ShoppingCard[i].id)
    }}
    dispatch(Actions.DeleteProductFromShoppingCard(id))
  }
}

  // Я использовал в качестве api сервера 'Mock api'.
  // Он сам меняет id объекта во время post запроса.
  // Из-за этого нельзя сравнивать id одного продукта в двух разных массивах, т.к id разные.
  // По этому когда я вызываю Thunk, я сравниваю ProductId ,
  // а уже потом делаю put запрос с нужным для изменения id.

export const UpdateQuantityInCard = (obj:Product,isUpdateShopCard = false ):ThunkActionType =>{
  return async (dispatch,getState) =>{
    UpdateQuantityInArrayOfProducts(obj,obj.data.ProductId)
    
    if(getState().MainReducer.ShoppingCard.length > 0){
    for (let i = 0; i < getState().MainReducer.ShoppingCard.length; i++)
    {if(getState().MainReducer.ShoppingCard[i].data.ProductId === obj.data.ProductId){
      UpdateQuantityInShopCard(obj,getState().MainReducer.ShoppingCard[i].id)
    }}}
    isUpdateShopCard && dispatch(GetShoppingCardArray())

    dispatch(Actions.changeCounterInCurrentProduct(obj.data))
    dispatch(Actions.UpdateQuantityInProducts(obj,obj.data.ProductId))
    dispatch(Actions.UpdateQuantityInCard(obj,obj.data.ProductId))
  }
}

export default MainReducer
