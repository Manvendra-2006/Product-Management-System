
import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
const ProductCard = () => {
  const authData = useContext(AuthContext)
  const ProductData = authData.productdata;
  const cardStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    width: "250px",
    padding: "16px",
    margin: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
  };

  const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "6px",
    marginBottom: "12px",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "6px",
    textAlign: "center",
  };

  const priceStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#16a34a", // green
    marginBottom: "6px",
  };

  const descStyle = {
    fontSize: "14px",
    color: "#6b7280", // gray
    marginBottom: "8px",
    textAlign: "center",
  };

  const stockStyle = {
    fontSize: "12px",
    // color: product.stock > 0 ? "#16a34a" : "#dc2626", // green if in stock, red if out
    marginBottom: "12px",
  };

  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#2563eb", // blue
    color: "white",
    border: "none",
    borderRadius: "4px",
    // cursor: product.stock > 0 ? "pointer" : "not-allowed",
    // opacity: product.stock > 0 ? 1 : 0.5,
    fontWeight: "bold",
  };

  return (
    <div style={{flexWrap:"wrap",display:"flex",justifyContent:"center",alignItems:'center',flexWrap:"1"}}>
{
  ProductData && ProductData.map((item)=>{
    return(
     <div style={cardStyle} key={item.id}>
      <img src="data:image/jpeg;base64,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"style={imageStyle} />
      <div style={titleStyle}>{item.name}</div>
      <div style={priceStyle}>₹{item.price}</div>
      <div style={descStyle}>{item.description}</div>
      <div style={stockStyle}>
   {item.stock}
      </div>
      <Link to={"/UserDashBoard/OrderPlaced/"+item.productId+"/"+item.name.replace(" ","")}>Order Now</Link>
    </div>
    )
  })
}
    
  
    </div>
  );
};

export default ProductCard;