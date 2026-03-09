import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../AuthProvider/AuthProvider'
const EditProduct = () => {
    
    const {id} = useParams()
    const navigate = useNavigate()
    const authData = useContext(AuthContext)    
    const ProductData = authData.productdata
    console.log(ProductData)
    const Data = ProductData.find((item)=> item.id == id)
    console.log(Data.productId)
    console.log(id)
    const [productId,setproductId] = useState(Data.productId)
    const [name,setname] = useState(Data.name)
    const [stock,setstock] = useState(Data.stock)
    const [description,setdescription] = useState(Data.description)
    const [price,setprice] = useState(Data.price)
  async  function EditProduct(event){
    event.preventDefault()
        const URL = `http://localhost:3000/products/${id}`
        let response = await fetch(URL,{
            method:"PUT",
            body:JSON.stringify({ productId,name,stock,description,price})
        })
        response = await response.json()
        if(response){
            alert("Product Data is Edited")
            navigate("/AdminDashBoard")
        }
    }
  return (
    <div>
        <form action="" onSubmit={(event)=>EditProduct(event)}>
            <label htmlFor="">ProductId</label>
            <input type="text" placeholder='Enter ProductId' onChange={(event)=>setproductId(event.target.value)} value={productId} />
            <br />
            <br />
             <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' onChange={(event)=>setname(event.target.value)} value={name} />
            <br />
            <br />
             <label htmlFor="">Description</label>
            <input type="text" placeholder='Enter Description' onChange={(event)=>setdescription(event.target.value)} value={description} />
            <br />
            <br />
             <label htmlFor="">Stock</label>
            <input type="number" placeholder='Enter Stock' onChange={(event)=>setstock(event.target.value)} value={stock} />
            <br />
            <br />
             <label htmlFor="">Price</label>
            <input type="number" placeholder='Enter Price' onChange={(event)=>setprice(event.target.value)} value={price} />
            <br />
            <br />
            <button type='submit'>Edit</button>
        </form>
    </div>
  )
}

export default EditProduct