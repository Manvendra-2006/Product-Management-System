import React, { createContext, useEffect, useState } from 'react'
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [userdata,setuserdata] = useState([]);
    const [orderdata,setorderdata] = useState([]);
    const [admindata,setadmindata ] = useState([])
    const [productdata,setproductdata] = useState([]);
    const [loading,setloading] = useState(true)
    async function UserData(){
        const URL = "http://localhost:3000/users";
        let response = await fetch(URL);
        response = await response.json();
        setuserdata(response)
    }
    async function OrderData(){
        const URL = "http://localhost:3000/orders";
        let response = await fetch(URL);
        response = await response.json()
        setorderdata(response)
    }
    async function AdminData(){
        const URL = "http://localhost:3000/admins";
        let response = await fetch(URL)
        response = await response.json()
        setadmindata(response)
    }
    async function ProductData(){
        const URL = "http://localhost:3000/products"
        let response = await fetch(URL)
        response = await response.json()
        setproductdata(response)
    }
    useEffect(()=>{
    Promise.all([UserData(), OrderData(), AdminData(), ProductData()])
    .finally(()=> setloading(false))  // ✅ सब complete होने के बाद false होगा
},[])
   
  return (
    <div>
  <AuthContext.Provider value={{admindata,orderdata,productdata,userdata,loading}}>
    {children}
        </AuthContext.Provider>      
    </div>
  )
}

export default AuthProvider