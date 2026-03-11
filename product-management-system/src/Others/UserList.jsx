import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { Link } from 'react-router-dom'

const UserList = () => {

  const authData = useContext(AuthContext)
  const userData = authData.userdata

  return (

    <div style={{padding:"30px",fontFamily:"Arial"}}>

      <h1 style={{marginBottom:"20px"}}>User List</h1>

      {
        userData && userData.map((item)=>{

          return(

            <div
              key={item.id}
              style={{
                border:"1px solid #ddd",
                padding:"15px",
                borderRadius:"8px",
                marginBottom:"12px",
                background:"#f9f9f9",
                boxShadow:"0 2px 6px rgba(0,0,0,0.1)"
              }}
            >

              <Link
                to={"/AdminDashBoard/UserList/UserInfo/"+item.id}
                style={{
                  textDecoration:"none",
                  fontSize:"18px",
                  color:"#333",
                  fontWeight:"bold"
                }}
              >
                👤 {item.name}
              </Link>

            </div>

          )

        })
      }

      <Link
        to="/AdminDashBoard"
        style={{
          display:"inline-block",
          marginTop:"25px",
          padding:"10px 18px",
          background:"#007bff",
          color:"white",
          borderRadius:"6px",
          textDecoration:"none"
        }}
      >
        ← Go To Admin Dashboard
      </Link>

    </div>

  )
}

export default UserList