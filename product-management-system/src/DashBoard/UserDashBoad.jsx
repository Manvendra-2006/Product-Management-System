import React from 'react'
import Header from '../Others/Header'
import Footer from '../Others/Footer'
import ProductCard from '../Others/ProductCards'

const UserDashBoad = ({data,setuser}) => {
  
  return (
    <div>
        <Header  data={data} data1={setuser}/>
        <ProductCard />
        <Footer/>
    </div>
  )
}

export default UserDashBoad