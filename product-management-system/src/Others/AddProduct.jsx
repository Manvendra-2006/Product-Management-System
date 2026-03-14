import React, { useState } from 'react'
import { toast } from 'react-toastify'

const AddProduct = () => {
     const [productId,setproductId] = useState('')
        const [name,setname] = useState('')
        const [stock,setstock] = useState('')
        const [description,setdescription] = useState('')
        const [price,setprice] = useState('')
        
    async function Add(event){
        event.preventDefault()
        const URL = "http://localhost:3000/products"
        let response = await fetch(URL,{
            method:"POST",
            body:JSON.stringify({productId,name,stock,description,price})
        })
        response =await  response.json()
        console.log(response)
        if(response){
            toast.success("Product is added")
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
background:"#22c55e",
color:"white",
border:"none",
borderRadius:"5px",
cursor:"pointer"
}
  return (
<div style={containerStyle}>

<div style={cardStyle}>

<h2>Add Product</h2>

<form onSubmit={(event)=>Add(event)}>

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
Add Product
</button>

</form>

</div>

</div>
)
}

export default AddProduct