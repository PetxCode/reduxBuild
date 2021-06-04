import { Header } from 'antd/lib/layout/layout'
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import img from "../../assets/2.jpg" 

const HeaderNav = ({cartCounter}) => {
  const [counting, setCounting] = useState(0)
  useEffect(()=>{
    let newCounter = 0
    cartCounter.forEach(el => {
      newCounter += el.qty
    })

    setCounting(newCounter)

  }, [cartCounter, counting])
  return (
    <div>
      <Header
      style={{
        display:"flex",
        justifyContent:"space-evenly"
      }}
      >
        <Link
        to="/"
        >
          <img
            src={img}
            style={{
              width:"100px",
              height:"40px",
              objectFit:"cover",
              borderRadius: "5px"
            }}
          />
        </Link>

        <Link
        to="/cart"
        style={{
          display:"flex"
        }}
        >
            <div
            style={{
              color:"white",
              fontWeight:"bold",
              fontSize:"20px",
             
            }}
            >Cart: </div>
            <div
             style={{
              color:"white",
              fontWeight:"bold",
              fontSize:"20px",
             marginLeft:"10px",
             color: 'red'
            }}
            >{counting}</div>
        </Link>
      </Header>
    </div>
  )
}

const mapState = state => {
  return{
    cartCounter: state.simple.cart
  }
}

export default connect(mapState) (HeaderNav)
