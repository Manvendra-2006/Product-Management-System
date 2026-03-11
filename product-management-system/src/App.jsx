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
import EditProduct from './Others/EditProduct'
import AddProduct from './Others/AddProduct'
import UserList from './Others/UserList'
import UserInfo from './Others/UserInfo'
import UserDetail from './Others/userDetail'
import UserOrder from './Others/userOrder'
const App = () => {
  const authData = useContext(AuthContext)
  const DataUser = authData.userdata;
  const DataAdmin = authData.admindata;
  const [user,setuser] = useState('');
  const [datausername,setdatausername] = useState('')
  var DataUserName;
  var DataAdminName;
  useEffect(()=>{
    if(authData){
      const loggedInUser = localStorage.getItem('loggedInUser')
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setuser(userData.role)
        setdatausername(userData.data)
      }
    }
  },[authData])
  function loginhandle(email,password){
    if(DataUser.find((item)=> item.email == email) && DataUser.find((item)=>item.password == password)){    
      setuser('user')
      DataUserName = DataUser.find((item)=>item.email == email)
      setdatausername(DataUserName)
      localStorage.setItem('loggedInUser',JSON.stringify({role :'user',data:DataUserName}))
    }
    else if(DataAdmin.find((item)=>item.email == email) && DataAdmin.find((item)=>item.password == password)){
      setuser('admin')
      DataAdminName = DataAdmin.find((item)=> item.email == email)
      setdatausername(DataAdminName)
        localStorage.setItem('loggedInUser',JSON.stringify({role :'admin',data:DataAdminName}))
    }    
    else{
      alert("User is not valid")
    }
  }
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp setuser={setuser}/>}/>
        <Route path='/' element={!user ? <Login loginhandle={loginhandle}/> : user =="admin" ?<Navigate to="/AdminDashBoard"/> : <Navigate to={"/UserDashBoard/"+datausername.name.replace(" ","")}/>}/>
        <Route path="/AdminDashBoard" element={user =="admin" ? <AdminDashBoard data={datausername}/> : <Navigate to="/"/>}/>
        <Route path="/UserDashBoard/:name" element={user == "user" ? <UserDashBoad  data={datausername}  setuser={setuser} /> : <Navigate to="/"/>}/>
        <Route path='/UserDashBoard/UserProfile/:id' element={<UserProfile/>}/>
        <Route path="/UserDashBoard/OrderPlaced/:id/:Name" element={<OrderPlaced/>}/>    
        <Route path="/AdminDashBoard/ProductList/EditProduct/:id" element={<EditProduct/>}/>
        <Route path="/AdminDashBoard/AddProduct" element={<AddProduct/>}/>
        <Route path="/AdminDashBoard/UserList" element={<UserList/>}/>
        <Route path='/AdminDashBoard/UserList/UserInfo/:id' element={<UserInfo/>}>
        <Route path=":name" element={<UserDetail/>}/>
        <Route path="" element={<UserOrder/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App