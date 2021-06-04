import {combineReducers} from "redux"
import {myShop} from "./stateReducer"


export const reducer = combineReducers({
  simple: myShop
}) 