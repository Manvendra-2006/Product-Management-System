import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'

const UserProfile = () => {
    const { id } = useParams()
    const authData = useContext(AuthContext)
    const Data = authData.userdata;
    const DataUserLoggedIn = Data.find((item)=> item.id == id)
    const UserOrderData = authData.orderdata
    const userorderdata = UserOrderData.filter((item)=> item.userId == id)

    return (
        <div style={{padding:"30px",fontFamily:"Arial"}}>

            {/* USER INFO CARD */}
            <div style={{
                border:"1px solid #ddd",
                padding:"20px",
                borderRadius:"10px",
                marginBottom:"30px",
                boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
                background:"#f9f9f9"
            }}>
                <h2>User Profile</h2>
                <p><b>Name:</b> {DataUserLoggedIn.name}</p>
                <p><b>Email:</b> {DataUserLoggedIn.email}</p>
                <p><b>Password:</b> {DataUserLoggedIn.password}</p>
                <p><b>User ID:</b> {id}</p>
            </div>

            <h2>Order History</h2>

            {/* ORDER LIST */}
            {
                userorderdata && userorderdata.map((item) => {
                    return (
                        <div key={item.id} style={{
                            border:"1px solid #ccc",
                            padding:"20px",
                            borderRadius:"10px",
                            marginBottom:"20px",
                            boxShadow:"0 2px 8px rgba(0,0,0,0.1)"
                        }}>

                            <h3>Order ID: {item.orderId}</h3>
                            <p><b>User ID:</b> {item.userId}</p>
                            <p><b>Date:</b> {item.date}</p>
                            <p><b>Total:</b> ₹{item.total}</p>

                            <div style={{marginTop:"15px"}}>
                                <h4>Products</h4>

                                {
                                    item.items.map((product,index) => {
                                        return (
                                            <div key={index} style={{
                                                background:"#f1f1f1",
                                                padding:"10px",
                                                borderRadius:"6px",
                                                marginBottom:"10px"
                                            }}>
                                                <p><b>Product ID:</b> {product.productId}</p>
                                                <p><b>Name:</b> {product.name}</p>
                                                <p><b>Price:</b> ₹{product.price}</p>
                                                <p><b>Quantity:</b> {product.quantity}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default UserProfile