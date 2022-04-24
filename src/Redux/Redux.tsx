import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import MainReducer from './Reducer'

const reducers = combineReducers({
  MainReducer: MainReducer
})

// I took an example of typing Action type from an article by the guys from Alfa bank:
// https://habr.com/ru/company/alfa/blog/452620/

type InferValueTypes<T> = T extends {[key: string]: infer U} ? U : never;

export type ActionsTypePattern<T extends {[key:  string]: (...arg:any[])=>any}> = 
ReturnType<InferValueTypes<T>>

type rootType = typeof reducers
export type StateType = ReturnType<rootType> 
//@ts-ignore
const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store