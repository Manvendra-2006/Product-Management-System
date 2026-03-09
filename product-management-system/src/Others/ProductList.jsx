import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { Link } from 'react-router-dom'
const ProductList = () => {
  const authData = useContext(AuthContext)
  const productData = authData.productdata
    async function DeleteProduct(id){
        const URL = `http://localhost:3000/products/${id}`
        let response = await fetch(URL,{
            method:"Delete"            
        })
        response = await response.json()
        console.log(response)
        if(response){
            alert("Product is Deleted")
        }
    }
  return (
    <div>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ProductId</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {
            productData && productData.map((item) => (
              <tr key={item.productId}>
                <td>{item.productId}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td>
                  <button onClick={()=>DeleteProduct(item.id)}>Delete</button>
                </td>
                <td>
                  <Link to={`/AdminDashBoard/ProductList/EditProduct/${item.id}`}>Edit</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProductList