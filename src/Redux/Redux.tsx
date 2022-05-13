import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ThunkMiddleware from "redux-thunk";
<<<<<<< HEAD
import MainReducer from "../Reducer"
=======
import MainReducer from "../Reducer.tsx"
>>>>>>> 21fa5505a223f75af8ff919ade0741e0a340a1aa


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
const store = createStore(reducers,composeWithDevTools(applyMiddleware(ThunkMiddleware)))

export default store