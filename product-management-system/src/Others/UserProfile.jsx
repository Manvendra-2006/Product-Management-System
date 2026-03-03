import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'
import ProductCard from './ProductCards'
const UserProfile = () => {
    const { id } = useParams()
    console.log(id)
    const authData = useContext(AuthContext)
    console.log(authData)

    const Data = authData.userdata;
    const DataUserLoggedIn = Data.find((item)=> item.id == id)
    const UserOrderData = authData.orderdata
    console.log(UserOrderData)
    const userorderdata = UserOrderData.filter((item)=> item.userId == id)
    console.log(userorderdata)
    return (
        <div>
            <h1>Name:{DataUserLoggedIn.name}</h1>
            <h1>Email:{DataUserLoggedIn.email}</h1>
            <h1>Password:{DataUserLoggedIn.pass}</h1>
            <h1>Id:{id}</h1>
            <h1>Order Data this user</h1>
            {
                userorderdata && userorderdata.map((item) => {
                    return (
                        <div>
                            <h1>{item.orderId}</h1>
                            <h1>{item.userId}</h1>
                            <h1>{item.date}</h1>
                            <h1>{item.total}</h1>
                            {
                                item.items.map((item) => {
                                    return (
                                        <div>
                                            <h3>{item.productId}</h3>
                                            <h3>{item.name}</h3>
                                            <h3>{item.price}</h3>
                                            <h3>{item.quantity}</h3>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }

        </div>
    )
}

export default UserProfile