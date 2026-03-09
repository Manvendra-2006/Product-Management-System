import React from 'react'

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
            alert("Data is added")
        }
    }
  return (
    <div>
        <form action="" onSubmit={(event)=>Add(event)}>
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

export default AddProduct