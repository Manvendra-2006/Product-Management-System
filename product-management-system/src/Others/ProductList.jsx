import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { Link } from 'react-router-dom'

const ProductList = () => {

  const authData = useContext(AuthContext)
  const productData = authData.productdata

  async function DeleteProduct(id){

    const URL = `http://localhost:3000/products/${id}`

    let response = await fetch(URL,{
      method:"DELETE"
    })

    response = await response.json()

    if(response){
      toast.info("Product is Deleted")
    }

  }

  return (

    <div style={{padding:"30px",fontFamily:"Arial"}}>

      <h1 style={{marginBottom:"20px"}}>Product List</h1>

      <table
        style={{
          width:"100%",
          borderCollapse:"collapse",
          boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
        }}
      >

        <thead style={{background:"#007bff",color:"white"}}>

          <tr>
            <th style={{padding:"10px"}}>Product ID</th>
            <th style={{padding:"10px"}}>Name</th>
            <th style={{padding:"10px"}}>Description</th>
            <th style={{padding:"10px"}}>Price</th>
            <th style={{padding:"10px"}}>Stock</th>
            <th style={{padding:"10px"}}>Delete</th>
            <th style={{padding:"10px"}}>Edit</th>
          </tr>

        </thead>

        <tbody>

          {
            productData && productData.map((item)=>{

              return(

                <tr
                  key={item.productId}
                  style={{
                    textAlign:"center",
                    borderBottom:"1px solid #ddd"
                  }}
                >

                  <td style={{padding:"10px"}}>{item.productId}</td>
                  <td style={{padding:"10px"}}>{item.name}</td>
                  <td style={{padding:"10px"}}>{item.description}</td>
                  <td style={{padding:"10px"}}>₹{item.price}</td>
                  <td style={{padding:"10px"}}>{item.stock}</td>

                  <td style={{padding:"10px"}}>

                    <button
                      onClick={()=>DeleteProduct(item.id)}
                      style={{
                        padding:"6px 12px",
                        background:"#dc3545",
                        color:"white",
                        border:"none",
                        borderRadius:"5px",
                        cursor:"pointer"
                      }}
                    >
                      Delete
                    </button>

                  </td>

                  <td style={{padding:"10px"}}>

                    <Link
                      to={`/AdminDashBoard/ProductList/EditProduct/${item.id}`}
                      style={{
                        padding:"6px 12px",
                        background:"#28a745",
                        color:"white",
                        textDecoration:"none",
                        borderRadius:"5px"
                      }}
                    >
                      Edit
                    </Link>

                  </td>

                </tr>

              )

            })
          }

        </tbody>

      </table>

    </div>

  )

}

export default ProductList