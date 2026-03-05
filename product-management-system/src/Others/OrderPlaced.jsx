import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useParams } from 'react-router';
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
                alert("Order is placed")
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
                alert("Order is placed")
            }
        }
        }
        else{
            alert("User is not valid")
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
    return (
        <div>
            <h1>Order Placed</h1>
            <form action="" onSubmit={(event) => orderplaced(event)}>
                <label htmlFor="">OrderId</label>
                <input type="text" placeholder='Enter OrderId' onChange={(event) => setorderId(event.target.value)} value={orderId} />
                <br />
                <br />
                <label htmlFor="">UserId</label>
                <input type="text" placeholder='Enter UserId' onChange={(event) => setuserId(event.target.value)} value={userId} />
                <br />
                <br />
                <label htmlFor="">Date</label>
                <input value={date} onChange={(event)=>setdate(event.target.value)} type='text' />
                <br />
                <br />
                <br />
                <label htmlFor="">Items</label>
                <ul>
                    <li>
                        <label htmlFor="">ProductId</label>
                        <input type="text" placeholder='Enter ProductId' onChange={(event) => setproductId(event.target.value)} value={productId} />
                    </li>
                    <li>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name1' onChange={(event) => setname(event.target.value)} value={name} />
                    </li>
                    <li>
                        <label htmlFor="">Price</label>
                        <input type="text" placeholder='Enter pricce' onChange={(event) => setprice(event.target.value)} value={price} />
                    </li>
                    <li>
                        <label htmlFor="">Quantity</label>
                        <input type="text" placeholder='Enter Quantity'  onChange={(event)=>QuantityDecider(event.target.value)} value={Quantity} />
                    </li>
                </ul>
                <button onClick={(event)=>CalculateTotal(event)}>Calculate Total</button>
                <h1>{total}</h1>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default OrderPlaced