
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
  ProductData?.map((item)=>(
  <div style={cardStyle} key={item.productId}>

    <img src={item.image} style={imageStyle} />

    <div style={titleStyle}>{item.name}</div>

    <div style={priceStyle}>₹{item.price}</div>

    <div style={descStyle}>{item.description}</div>

    <div style={stockStyle}>
      {item.stock}
    </div>

    <Link
      to={`/UserDashBoard/OrderPlaced/${item.productId}/${item.name.replaceAll(" ","")}`}
      style={buttonStyle}
    >
      Order Now
    </Link>

  </div>
))
}
    
  
    </div>
  );
};

export default ProductCard;