import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'

const UserDetail = () => {

  const authData = useContext(AuthContext)
  const userData = authData.userdata

  const {id} = useParams()

  const Data = userData.filter((item)=> item.id == id)

  return (

    <div style={{padding:"30px",fontFamily:"Arial"}}>

      <h1 style={{marginBottom:"20px"}}>User Details</h1>

      {
        Data && Data.map((item)=>{

          return(

            <div
              key={item.id}
              style={{
                border:"1px solid #ddd",
                padding:"20px",
                borderRadius:"10px",
                background:"#f9f9f9",
                boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
                maxWidth:"400px"
              }}
            >

              <h2 style={{marginBottom:"10px"}}>👤 {item.name}</h2>

              <p>
                <b>Email:</b> {item.email}
              </p>

              <p>
                <b>Password:</b> {item.password}
              </p>

              <p>
                <b>User ID:</b> {item.id}
              </p>

            </div>

          )

        })
      }

      <Link
        to="/AdminDashBoard/UserList"
        style={{
          display:"inline-block",
          marginTop:"20px",
          padding:"10px 18px",
          background:"#007bff",
          color:"white",
          borderRadius:"6px",
          textDecoration:"none"
        }}
      >
        ← Go To User List
      </Link>

    </div>

  )

}

export default UserDetail