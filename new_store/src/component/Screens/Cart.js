import { Button, Input } from 'antd'
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import img from "../../assets/1.jpg"
import { adjustCartQTY, removeFromCart } from '../StateManagement/stateAction'

const Cart = ({r, adjustQTY, remove}) => {

  const [input, setInput] = useState(r.qty)


  return (
    <div>
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
        <div
        style={{
          display:"flex",
          justifyContent:"space-around",
          marginTop:"10px"
        }}
        >
          <Input
          style={{
            width:"60px"
          }}
          min="1"
              type="number"
              value={input}
              onChange={(e)=>{
                setInput(e.target.value)
                adjustQTY(r.id, e.target.value)
              }}
          />
          <Button
          onClick={()=>{
            remove(r.id)
          }}
          >Remove from Cart</Button>
        </div>
       </div>
      </div>
    </div>
    </div>
  )
}

const mapDispatch = dispatch => {
  return{
    adjustQTY: (id, value) => {
      dispatch(adjustCartQTY(id, value))
    },
    remove: (id) => {
      dispatch(removeFromCart(id))
    }
  }
}

export default connect(null, mapDispatch) (Cart)
