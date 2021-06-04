import React from 'react'
import ProductCart from './ProductCart'
import {connect} from "react-redux"

const ProductPage = ({product}) => {
  return (
    <div>
     {
       product.map((item) => (
        <ProductCart key={item.id} r={item} />
       ))
     }
    </div>
  )
}

export const mapStateToProps = state => {
  return{
    product: state.shop.product
  }
} 

export default connect(mapStateToProps)(ProductPage)
