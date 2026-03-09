import React from 'react'
 import Header from '../Others/Header'
import TotalNoOrder from '../Others/TotalNoOrder'
import ProductList from '../Others/ProductList'
const AdminDashBoard = ({data}) => {
  console.log(data)
  return (
    <div>
    <Header data={data}/>
    <TotalNoOrder/>
    <ProductList/>
    
    </div>
  )
}

export default AdminDashBoard