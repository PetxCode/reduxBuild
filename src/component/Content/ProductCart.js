import { Button } from 'antd'
import React from 'react'
import img from "../../asset/1.png"
import img1 from "../../asset/2.png"
import img2 from "../../asset/3.jpg"
import {connect, useDispatch} from "react-redux"
import { addActionState } from '../Redux/actionsState'

const ProductCart = ({r, addActionState}) => {

  return (
    <div
    style={{
      justifyContent:"center",
      display:"flex",
      flexWrap:"wrap"
    }}
    >
      <div
      style={{
        width:"300px",
        height:"450px",
        borderRadius:"5px",
        backgroundColor:"lightcoral",
        margin:"10px"
      }}
      >
        <img 
          src={r.image}
          style={{
            width:"100%",
            height:"300px",
            objectFit:"cover",
            borderRadius: "5px 5px 0 0"
          }}
        />
        <div
        style={{
          padding:"0px 10px",
          fontWeight:"bold"
        }}
        >{r.title}</div>

        <div
        style={{
          padding:"10px 10px",
          fontWeight:"bold"
        }}
        >
          ${r.price}
        </div>

        <Button
        type="primary"
        style={{
          width:"50%",
          justifyContent:"center",
          // alignItems:"center",
          display:"flex",
          margin: "auto"
          // margin: "0 20px"
        }}
onClick={()=>{
  addActionState(r.id)
}}
        >Add to Cart</Button>


      </div>
      
      
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return{
    addActionState: (id) => dispatch(addActionState(id))
  }
}

export default connect(null, mapDispatchToProps)(ProductCart)
