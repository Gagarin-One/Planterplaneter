import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ThunkMiddleware from "redux-thunk";
import MainReducer from "./Reducer"

const reducers = combineReducers({
  MainReducer: MainReducer
})

type InferValueTypes<T> = T extends {[key: string]: infer U} ? U : never;

export type ActionsTypePattern<T extends {[key:  string]: (...arg:any[])=>any}> = 
ReturnType<InferValueTypes<T>>

type rootType = typeof reducers
export type StateType = ReturnType<rootType> 
//@ts-ignore
const store = createStore(reducers,composeWithDevTools(applyMiddleware(ThunkMiddleware)))

export default store