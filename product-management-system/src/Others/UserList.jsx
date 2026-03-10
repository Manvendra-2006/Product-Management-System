import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { Link } from 'react-router-dom'
const UserList = () => {
    const authData = useContext(AuthContext)
    const userData = authData.userdata
  return (
    <div>
        <h1>UserList</h1>
        {
            userData && userData.map((item)=>{
                return(
                    <div>
                       <Link to={"/AdminDashBoard/UserList/UserInfo/"+item.id}>{item.name}</Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UserList