import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'

const TotalNoOrder = () => {
    const authData = useContext(AuthContext)
    const orderData = authData.orderdata
    const Length = orderData.length
    console.log(orderData.length)
    
  return (
    <div style={{height:"100px",width:"100%",border:"2px solid black",backgroundColor:"yellow",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <p>Total No. Of Order</p>
        <p>{Length}</p>
    </div>
  )
}

export default TotalNoOrder