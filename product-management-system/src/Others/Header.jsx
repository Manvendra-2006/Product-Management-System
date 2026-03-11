import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({data,data1}) => {

const navigate = useNavigate()

function LogOut(){
    data1('')
    navigate("/")
}
const headerStyle = {
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"15px 40px",
borderBottom:"2px solid #ddd",
background:"#f8fafc"
}

const navStyle = {
display:"flex",
gap:"20px"
}

const linkStyle = {
textDecoration:"none",
fontWeight:"bold",
color:"#2563eb"
}

const btnStyle = {
padding:"8px 16px",
background:"#ef4444",
color:"white",
border:"none",
borderRadius:"5px",
cursor:"pointer"
}
return (

<div style={headerStyle}>

<div>
<h3 style={{margin:0}}>Hi,</h3>
<h2 style={{margin:0}}>{data.name}</h2>
</div>

<div style={navStyle}>

{
data.name === "Admin One" && (
<>
<Link style={linkStyle} to="/AdminDashBoard/AddProduct">
Add Product
</Link>

<Link style={linkStyle} to="/AdminDashBoard/UserList">
User List
</Link>
</>
)
}

{
data.name !== "Admin One" && (
<Link style={linkStyle} to={"/UserDashBoard/UserProfile/"+data.id}>
User Profile
</Link>
)
}

</div>

<button onClick={LogOut} style={btnStyle}>
Log Out
</button>

</div>

)
}

export default Header