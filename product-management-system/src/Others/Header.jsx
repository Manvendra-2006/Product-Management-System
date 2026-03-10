import React from 'react'
import { Link } from 'react-router-dom'
const Header = ({data,data1}) => {
    console.log(data)
 function LogOut(){
        data1('')
        navigate("/")
    }
  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",borderBottom:"2px solid black"}}>
            <div>
                <h1 style={{margin:"0px",padding:"0px"}}>Hi,</h1>
                <h1>{data.name}</h1>
            </div>
            <div>
                {
                    data.name == "Admin One" ?<Link to="/AdminDashBoard/AddProduct">Add Product</Link>:<Link to={"/UserDashBoard/UserProfile/"+ data.id}>User Profile</Link>
                }
                {
                    data.name == "Admin One" ? <Link to="/AdminDashBoard/UserList">UserLIst</Link>:<Link to={"/UserDashBoard/UserProfile/"+data.id}>User Profile</Link>
                }
            </div>
            <button onClick={LogOut}>Log Out</button>
        </div>
    </div>
  )
}

export default Header