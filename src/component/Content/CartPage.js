import { Button, Input } from 'antd'
import React, {useState, useEffect} from 'react'
import img1 from "../../asset/2.png"
import img2 from "../../asset/3.jpg"
import {connect} from 'react-redux'
import { adjustActionState, removeActionState } from '../Redux/actionsState'

const CartPage = ({r, remove, adjustQTY}) => {
  const [input, setInput] = useState(r.qty)
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
        display:"flex",
        justifyContent:"space-evenly",
        width:"100%"
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
          $ {r.price} <br/>
             </div>
             
         <div>
         <Input
            type="number"
            value={input}
            placeholder="qty"
            min="1"
            style={{
              width:"50px",
              margin:"20px"
            }}
            onChange={(e)=>{
              setInput(e.target.value)
              adjustQTY(r.id, e.target.value)
            }}
            />

            <Button
            onClick={()=>{
              remove(r.id)
            }}
            >Remove</Button>
           
           </div>    

        {/* <Button
        type="primary"
        style={{
          width:"50%",
          justifyContent:"center",
          // alignItems:"center",
          display:"flex",
          margin: "auto"
          // margin: "0 20px"
        }}

        >Add to Cart</Button> */}


      </div>
      
      </div>
    
      
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    remove: (id) => {
      dispatch(removeActionState(id))
    },
    adjustQTY: (id, value) => {
      dispatch(adjustActionState(id, value))
    }
  }
}

export default connect(null, mapDispatchToProps) (CartPage)
