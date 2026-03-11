import React, { useContext } from 'react'
import { Outlet, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'

const UserInfo = () => {

  const {id} = useParams()
  const authData = useContext(AuthContext)

  const userData = authData.userdata
  const UserData = userData.find((item)=> item.id == id)

  return (

    <div style={{padding:"30px",fontFamily:"Arial"}}>

      {/* USER HEADER */}
      <div
        style={{
          marginBottom:"25px",
          padding:"15px",
          borderRadius:"8px",
          background:"#f5f5f5",
          boxShadow:"0 2px 6px rgba(0,0,0,0.1)"
        }}
      >
        <h2>User: {UserData.name}</h2>
        <p>User ID: {id}</p>
      </div>


      {/* NAVIGATION BUTTONS */}

      <div style={{marginBottom:"25px"}}>

        <Link
          to={UserData.name.replace(" ","")}
          style={{
            padding:"10px 18px",
            marginRight:"10px",
            background:"#007bff",
            color:"white",
            textDecoration:"none",
            borderRadius:"6px"
          }}
        >
          User Details
        </Link>

        <Link
          to=""
          style={{
            padding:"10px 18px",
            background:"#28a745",
            color:"white",
            textDecoration:"none",
            borderRadius:"6px"
          }}
        >
          Order Data
        </Link>

      </div>

      {/* CHILD ROUTES */}

      <div
        style={{
          border:"1px solid #ddd",
          padding:"20px",
          borderRadius:"8px",
          background:"#fafafa"
        }}
      >
        <Outlet/>
      </div>

    </div>

  )
}

export default UserInfo