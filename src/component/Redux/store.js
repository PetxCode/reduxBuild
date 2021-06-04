import {reducer}  from "./myReducer"
import {composeWithDevTools} from "redux-devtools-extension"
import {createStore} from "redux"


export const store = createStore(reducer,composeWithDevTools())