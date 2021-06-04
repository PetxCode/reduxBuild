import { Button } from 'antd'
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import Cart from './Cart'

const CartHolder = ({viewCart}) => {

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(()=>{
    let price = 0
    let item = 0

    viewCart.forEach(el => {
      price += el.price * el.qty
      item += el.qty
    })

    setTotalItems(item)
    setTotalPrice(price)


  }, [setTotalItems, setTotalPrice, totalItems, totalPrice, viewCart ])

  return (
    <div
    style={{
      display:"flex",
      justifyContent:"space-between",
      margin:"10px 20px"
    }}
    >
      <div
      style={{
        width:"10%",
      }}
      >
        <div>Here is your store selection</div>
        <br/>
        <div>Your Total itme is: {totalItems} </div>
        <br/>
        <div
       
        >With a total price of: <div  style={{
          fontWeight:"bold"
        }}> ${Math.ceil(totalPrice)}</div> </div>
        <br/>
        <br/>
        <br/>
        <Button
        type="primary"
        danger
        >Proceed to CheckOut</Button>
      </div>
      <div
       style={{
        width:"90%",
      }}
      >
        <div
        style={{
          display:"flex",
          justifyContent:"center",
          flexWrap:"wrap"
        }}
        >
        {
          viewCart.map(item => (
            <Cart key={item.id} r={item} />
          ))
        }
       
        </div>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    viewCart: state.simple.cart
  }
}

export default connect(mapState) (CartHolder)
