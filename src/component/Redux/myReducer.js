import {combineReducers} from "redux"
import {shopReducer} from "./reducerState"

export const reducer = combineReducers({
  shop: shopReducer
})