import { Button } from 'antd'
import React from 'react'
import img from "../../assets/1.jpg"
import {connect} from "react-redux"
import { addToCart } from '../StateManagement/stateAction'

const MyStore = ({r, addingToCart}) => {
  return (
    <div>
      <div
      style={{
        backgroundColor:"lightblue",
        borderRadius:"10px",
        width:"300px",
        paddingBottom:"20px",
        margin:"20px"
      }}
      >
        <img
          src={r.image}
          style={{
            width:"300px",
            height:"320px",
            objectFit:"cover",
            borderRadius:"10px 10px 0 0",
            marginBottom:"20px"
          }}
        />
       <div
       style={{
         paddingLeft:"10px"
       }}
       >
       <div>{r.title}</div>
        <div>$ {r.price}</div>
        <Button
        onClick={()=>{
          addingToCart(r.id)
        }}
        >Add to Cart</Button>
       </div>
      </div>
    </div>
  )
}

const mapDispatch = dispatch => {
  return{
    addingToCart: (id) => {
      dispatch(addToCart(id))
    }
  }
}

export default connect(null, mapDispatch)(MyStore)
