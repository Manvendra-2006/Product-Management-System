import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'

const TotalNoOrder = () => {

  const authData = useContext(AuthContext)
  const orderData = authData.orderdata

  const Length = orderData.length

  return (

    <div
      style={{
        height:"120px",
        width:"250px",
        borderRadius:"10px",
        background:"#4CAF50",
        color:"white",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        boxShadow:"0 4px 12px rgba(0,0,0,0.2)",
        fontFamily:"Arial"
      }}
    >

      <p style={{fontSize:"18px",margin:"5px"}}>
        Total Orders
      </p>

      <h1 style={{margin:"5px"}}>
        {Length}
      </h1>

    </div>

  )

}

export default TotalNoOrder