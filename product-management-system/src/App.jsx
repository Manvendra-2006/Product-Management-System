import React, { useContext, useEffect, useState } from 'react'
import UserDashBoad from './DashBoard/UserDashBoad'
import Login from './Auth/Login'
import { AuthContext } from './AuthProvider/AuthProvider'

//import AuthProvider, { AuthContext } from './AuthProvider/AuthProvider'
import { BrowserRouter,Route,Routes ,Navigate} from 'react-router-dom'
import AdminDashBoard from './DashBoard/AdminDashBoard'
import UserProfile from './Others/UserProfile'
import OrderPlaced from './Others/OrderPlaced'
import SignUp from './Auth/SignUp'
const App = () => {
  
  const authData = useContext(AuthContext)
  console.log(authData.userdata)
  console.log(authData.admindata)
  console.log(authData.orderdata)
  console.log(authData.productdata)
  const DataUser = authData.userdata;
  const DataAdmin = authData.admindata;
  const [user,setuser] = useState('');
  const [datausername,setdatausername] = useState('')
  var DataUserName;
  function loginhandle(email,password){
    if(DataUser.find((item)=> item.email == email) && DataUser.find((item)=>item.password == password)){    
      setuser('user')
      DataUserName = DataUser.find((item)=>item.email == email)
      setdatausername(DataUserName)
    }
    else if(DataAdmin.find((item)=>item.email == email) && DataAdmin.find((item)=>item.password == password)){
      setuser('admin')
    }    
    else{
      alert("User is not valid")
    }
  }
  console.log(datausername)
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp setuser={setuser}/>}/>
        <Route path='/' element={!user ? <Login loginhandle={loginhandle}/> : user =="admin" ?<Navigate to="/AdminDashBoard"/> : <Navigate to="/UserDashBoard/"/>}/>
        <Route path="/AdminDashBoard" element={user =="admin" ? <AdminDashBoard/> : <Navigate to="/"/>}/>
        <Route path="/UserDashBoard" element={user == "user" ? <UserDashBoad  data={datausername}  setuser={setuser} /> : <Navigate to="/"/>}/>
        <Route path='/UserDashBoard/UserProfile/:id' element={<UserProfile/>}/>
        <Route path="/UserDashBoard/OrderPlaced/:id/:Name" element={<OrderPlaced/>}/>
    
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App