"use client"
 
import Product from "./Product"
import { ProductItemType } from "./product-type"

type ProductListType = {
  productList: ProductItemType[]
}

const AllProducts = ({productList}: ProductListType) => {

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
          {
            productList.map(({id, name, price, category}) => (
              <Product 
                  key={id + name}
                  id={id}
                  name={name}
                  price={price}
                  category={category}
                  />
            ))
          }
      </tbody>
    </table>
  )

}

export default AllProducts