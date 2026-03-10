import React, { useContext } from 'react'
import { Outlet, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'
const UserInfo = () => {
    const {id} = useParams()
    const authData = useContext(AuthContext)
    const userData = authData.userdata
    const UserData = userData.find((item)=> item.id == id)
    const orderData = authData.orderdata
    const OrderData = orderData.filter((item)=> item.userId == id)
    
  return (
    <div>
        <Link to={UserData.name}>UserDetails</Link>
       
        <Link to={id}>Order Data</Link>
        <Outlet/>
    </div>
  )
}

export default UserInfo