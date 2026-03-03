import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'
const SignUp = ({setuser}) => {
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [userId,setuserId] = useState('')
    const authData = useContext(AuthContext)
    const userData = authData.userdata
    const navigate = useNavigate()
  async  function handleSignUp(event){
        event.preventDefault()
        const Data = userData.find((item)=> item.userId === userId && item.email === email)
        if(Data){
            alert("User is already signup")
        }
        else{
        const URL = "http://localhost:3000/users"
        let response = await fetch(URL,{
            method:"POST",
            body:JSON.stringify({name,email,password,userId,})
        })
        response = await response.json()
        console.log(response)
        if(response){
            alert("User is Sign-Up")
            setuser('user')
            navigate("/UserDashBoard")
        }       
        }
 
    }
  return (
    <div>
        <h1>SignUp</h1>
        <form action="" onSubmit={(event)=>handleSignUp(event)}>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Text' name='name' value={name} onChange={(event)=>setname(event.target.value)} />
            <br />
            <br />
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter email' name='email' value={email} onChange={(event)=>setemail(event.target.value)} />
            <br />
            <br />
            <label htmlFor="">Password</label>
            <input type="text" placeholder='Enter Password' name='password' value={password} onChange={(event)=>setpassword(event.target.value)} />
            <br />
            <br />
            <label htmlFor="">UserId</label>
            <input type="text" placeholder='Enter UserId' name='userID' value={userId} onChange={(event)=>setuserId(event.target.value)} />
            <br />
            <br />
            <button>SignUp</button>
            <Link to="/">Already Have a accout ?</Link>
        </form>
    </div>
  )
}

export default SignUp