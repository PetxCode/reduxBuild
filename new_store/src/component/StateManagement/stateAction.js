import {actionType} from "./actionType"

export const addToCart = (itemID) => {
  return{
    type: actionType.ADD_TO_CART,
    payload: {
      id: itemID
    }
  }
}

export const removeFromCart = (itemID) => {
  return{
    type: actionType.REMOVE_FROM_CART,
    payload: {
      id: itemID
    }
  }
}

export const adjustCartQTY = (itemID, value) => {
  return{
    type: actionType.ADJUST_CART_QTY,
    payload: {
      id: itemID,
      qty: value
    }
  }
}

export const loadCartItems = (item) => {
  return{
    type: actionType.LOAD_CART_ITEMS,
    payload: {
      id: item
    }
  }
}