import { Header } from 'antd/lib/layout/layout'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {connect} from "react-redux"

const HeaderView = ({cart}) => {
  const [addCart, setAddCart] = useState(0)

  useEffect(()=>{
    let newCount = 0

    cart.forEach((item) => {
      newCount += item.qty
    })

    setAddCart(newCount)

  }, [cart, addCart])

  return (
    <div>
      <Header
      style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around"
      }}
      >
        <Link
        to="/"
        >
        <div>Home</div>
        </Link>
        <Link
        to="/cart"
        >
        <div>Cart: {addCart}</div>
        </Link>
      </Header>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps) (HeaderView)
