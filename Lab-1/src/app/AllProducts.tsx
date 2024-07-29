"use client"
 
import Product from "./Product"

const AllProducts = () => {

  return (
    <table style={{
      border: "1px solid black",
      backgroundColor: "aliceblue",
      marginTop: "10px",
      fontFamily: "sans-serif"
    }}
    >
      <thead>
        <tr>
          <th style={{border: "1px solid black", padding: "10px"}}>Sr.</th>
          <th style={{border: "1px solid black", padding: "10px"}}>Product</th>
          <th style={{border: "1px solid black", padding: "10px"}}>Price</th>
          <th style={{border: "1px solid black", padding: "10px"}}>Category</th>
        </tr>
      </thead>

      <tbody>
          <Product />
          <Product />
          <Product />
      </tbody>
    </table>
  )

}

export default AllProducts