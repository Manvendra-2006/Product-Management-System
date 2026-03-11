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
    const containerStyle = {
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh",
background:"#f4f6f9"
}

const cardStyle = {
width:"350px",
padding:"25px",
background:"white",
borderRadius:"10px",
boxShadow:"0px 0px 10px rgba(0,0,0,0.2)"
}

const inputStyle = {
width:"100%",
padding:"8px",
marginBottom:"12px",
border:"1px solid #ccc",
borderRadius:"5px"
}

const btnStyle = {
width:"100%",
padding:"10px",
background:"#2563eb",
color:"white",
border:"none",
borderRadius:"5px",
cursor:"pointer"
}
 return (
<div style={containerStyle}>

<div style={cardStyle}>

<h2>Edit Product</h2>

<form onSubmit={(event)=>EditProduct(event)}>

<label>Product Id</label>
<input
type="text"
value={productId}
onChange={(event)=>setproductId(event.target.value)}
style={inputStyle}
/>

<label>Name</label>
<input
type="text"
value={name}
onChange={(event)=>setname(event.target.value)}
style={inputStyle}
/>

<label>Description</label>
<input
type="text"
value={description}
onChange={(event)=>setdescription(event.target.value)}
style={inputStyle}
/>

<label>Stock</label>
<input
type="number"
value={stock}
onChange={(event)=>setstock(event.target.value)}
style={inputStyle}
/>

<label>Price</label>
<input
type="number"
value={price}
onChange={(event)=>setprice(event.target.value)}
style={inputStyle}
/>

<button type="submit" style={btnStyle}>
Update Product
</button>

</form>

</div>

</div>
)
}

export default EditProduct