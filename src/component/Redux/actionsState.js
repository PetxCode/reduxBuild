import {actionType} from "./actionType"

export const addActionState = (itemID) => {
return{
  type: actionType.ADD_TO_CART,
  payload: {
    id: itemID
  }
  }
}

export const removeActionState = (itemID) => {
return{
  type: actionType.REMOVE_FROM_CART,
  payload: {
    id: itemID
  }
  }
}

export const adjustActionState = (itemID, value) => {
return{
  type: actionType.ADJUST_CART,
  payload: {
    id: itemID,
    qty: value
  }
  }
}

export const loadAllActionState = (item) => {
return{
  type: actionType.LOAD_CART,
  payload: item
  }
}