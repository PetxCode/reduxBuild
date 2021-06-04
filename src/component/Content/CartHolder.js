import React, {useEffect, useState} from 'react'
import CartPage from './CartPage'
import {connect} from "react-redux"
import { Button } from 'antd'

const CartHolder = ({cart}) => {
  const [totalCost, setTotalCost] = useState(0)
  const [totalItem, setTotalItem] = useState(0)

  useEffect(()=>{
    let price = 0
    let item = 0

    cart.forEach(el => {
      price += el.qty * el.price
      item += el.qty
    })

    setTotalCost(price)
    setTotalItem(item)


  }, [totalCost, totalItem, cart, setTotalCost, setTotalItem])

  return (
   <div
   style={{
     display:"flex",
     justifyContent:"space-evenly",
     width:"100%"
   }}
   >
      <div>
      {
        cart.map((item => (
          <CartPage key={item.id} r={item}/>
        )))
      }
    </div>
    <div>
      <div>Summary</div>
      <div>Total items: {totalItem} </div>
      <div>Total Price: {Math.ceil(totalCost)} </div>
      <Button>Process to checkout</Button>
    </div>
   </div>
  )
}
const mapStateToProps = state => {
  return{
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(CartHolder)
