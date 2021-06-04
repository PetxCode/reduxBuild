import React from 'react'
import MyStore from './MyStore'
import {connect} from "react-redux"

const HomeScreen = ({store}) => {
  return (
    <div
    style={{
      display:"flex",
      justifyContent:"center",
      flexWrap:"wrap"
    }}
    >
     
     {
       store.map(item => (
        <MyStore key={item.id} r={item}/>
       ))
     }
    
     
    </div>
  )
}
const mapState = state => {
  return{
    store: state.simple.store
  }
}
export default connect(mapState) (HomeScreen)
