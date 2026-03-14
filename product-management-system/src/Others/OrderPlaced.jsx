import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
const OrderPlaced = () => {    
const today = new Date().toISOString().split("T")[0];
    const authData = useContext(AuthContext)
    const ProductData = authData.productdata
    const OrderData = authData.orderdata
    const UserData = authData.userdata
    const { id, Name } = useParams()
    const Data = ProductData.find((item) => item.productId == id)
    const ID = Data.id
    const Price = Data.price  // yahi mera total hain
    const Stock = Data.stock
    const ProductId = Data.productId
    const [orderId, setorderId] = useState("ORD"+today)
    const [userId, setuserId] = useState('')
    const [date, setdate] = useState(today)
    const [productId, setproductId] = useState(id)
    const [name, setname] = useState(Name)
    const [price, setprice] = useState(Price)
    const [Quantity, setquantity] = useState('')
    const [items, setitems] = useState([productId, name, price, Quantity])
    const [submitting, setsubmitting] = useState(false)
    const [total, settotal] = useState(Quantity * Price)
    useEffect(() => {
        if (submitting == true) {
            fetchData();
        }
        async function fetchData() {          
            const check = OrderData.find((item)=>item.userId === userId && item.orderId === orderId && item.date===date)
            const UserValid = UserData.find((item)=> item.id == userId)
            if(UserValid){            
        if(check){
            const URL = `http://localhost:3000/orders/${check.id}`
            let response = await fetch(URL+"/",{
                method:"PUT",
                body:JSON.stringify({
                    ...check,
                    items:[...check.items , ...items],
                    total:check.total+total
                })
            })
            response = await response.json()
             if(response){
                toast.success("Order is Placed")
            }
        }
        else{
            const URL="http://localhost:3000/orders"
            let response = await fetch(URL,{
                method:"POST",
                body:JSON.stringify({orderId,userId,date,total,items})
            })
            response = await response.json()
            if(response){
                toast.success("Order is placed")
            }
        }
        }
        else{
            toast.error("Order is not placed")
        }
    }
    }, [submitting]) // Jab bhi dependecy ki value change hogi useEffect chlega
    function orderplaced(event) {
        event.preventDefault()
        setitems([{ productId, name, price, Quantity }]) // items ko call kiya ab items ke andar value jaayegi jo form main input dalal maine       
        setsubmitting(true)
    }
    function CalculateTotal(event){
        event.preventDefault()
        settotal(Quantity*Price)
    }
    async function QuantityDecider(event){
        if(Stock){
        const qty = Number(event)
        if(qty<=Stock){
            setquantity(event)
            const TotalStock = Stock-qty;
            const URL = `http://localhost:3000/products/${ID}`
            let response = await fetch(URL,{
                method:"PUT",
                 headers:{
                "Content-Type":"application/json"
            },
                body:JSON.stringify({
                    ...Data,
                    stock : TotalStock
                })
            })
            response = await response.json()
        }

    
        else{
            alert("Stock is not available")
        }}
        else{
            alert("Data not come")            
        }
    }
    const inputStyle = {
  width:"100%",
  padding:"8px",
  marginBottom:"10px",
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
  marginTop:"10px",
  cursor:"pointer"
}

const submitStyle = {
  width:"100%",
  padding:"12px",
  background:"green",
  color:"white",
  border:"none",
  borderRadius:"5px",
  marginTop:"10px",
  cursor:"pointer"
}
   return (
  <div style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    minHeight:"100vh",
    background:"#f4f6f9"
  }}>

    <div style={{
      width:"400px",
      background:"white",
      padding:"30px",
      borderRadius:"10px",
      boxShadow:"0px 0px 10px rgba(0,0,0,0.2)"
    }}>

      <h2 style={{textAlign:"center",marginBottom:"20px"}}>
        Order Placed
      </h2>

      <form onSubmit={(event)=>orderplaced(event)}>

        <label>Order Id</label>
        <input
          type="text"
          value={orderId}
          onChange={(event)=>setorderId(event.target.value)}
          style={inputStyle}
        />

        <label>User Id</label>
        <input
          type="text"
          value={userId}
          onChange={(event)=>setuserId(event.target.value)}
          style={inputStyle}
        />

        <label>Date</label>
        <input
          type="text"
          value={date}
          onChange={(event)=>setdate(event.target.value)}
          style={inputStyle}
        />

        <h3 style={{marginTop:"20px"}}>Items</h3>

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

        <label>Price</label>
        <input
          type="text"
          value={price}
          onChange={(event)=>setprice(event.target.value)}
          style={inputStyle}
        />

        <label>Quantity</label>
        <input
          type="number"
          value={Quantity}
          onChange={(event)=>QuantityDecider(event.target.value)}
          style={inputStyle}
        />

        <button
          onClick={(event)=>CalculateTotal(event)}
          style={btnStyle}
        >
          Calculate Total
        </button>

        <h2 style={{textAlign:"center"}}>Total : ₹{total}</h2>

        <button style={submitStyle}>
          Submit Order
        </button>

      </form>

    </div>
  </div>
)
}
export default OrderPlaced