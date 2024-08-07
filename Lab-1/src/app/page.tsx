"use client";

import { useEffect, useState } from "react";
import AllProducts from "./AllProducts";
import MyInfo from "./MyInfo";
import Categories from "./Categories";
import { ProductItemType } from "./product-type";

const products: ProductItemType[] = [
  {
    id: 1,
    name: "IPhone 15 Pro Max",
    price: 2500,
    category: "Phones",
  },
  {
    id: 2,
    name: "Airpod",
    price: 25,
    category: "Gadgets",
  },
  {
    id: 3,
    name: "Eid Special Nara J.",
    price: 25,
    category: "Clothes",
  },
  {
    id: 4,
    name: "Tesla Cybertruck",
    price: 65000,
    category: "Cars",
  },
  {
    id: 5,
    name: "Macbook",
    price: 2500,
    category: "Computers",
  },
  {
    id: 6,
    name: "Dell Computer",
    price: 1000,
    category: "Computers",
  },
  {
    id: 7,
    name: "Mehran",
    price: 2000,
    category: "Cars",
  },
  {
    id: 8,
    name: "Headphones",
    price: 250,
    category: "Gadgets",
  },
  {
    id: 5,
    name: "Shalwar Kameez",
    price: 150,
    category: "Clothes",
  },
  {
    id: 10,
    name: "Samsung s23 Ultra",
    price: 2500,
    category: "Phones",
  },
  {
    id: 11,
    name: "Air Conditioner",
    price: 500,
    category: "Electronics",
  },
  {
    id: 12,
    name: "Microwave oven",
    price: 200,
    category: "Electronics",
  },
];

export default function Home() {
  const [categList, setCategList] = useState([
    "All",
    "Phones",
    "Gadgets",
    "Clothes",
    "Cars",
    "Electronics",
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCat, setSelectedCat] = useState("All");

  useEffect(() => console.log("Hello World"), []);
 
  useEffect(() => {
    let shrtListPrdts = products.filter(({category}) => (
     selectedCat === "All" || category === selectedCat
    ))

    setFilteredProducts(shrtListPrdts)
  }, [selectedCat])

  return (
    <>
      <MyInfo />
      <Categories categories={categList} setSelectedCat={setSelectedCat}/>
      <AllProducts productList={filteredProducts} />
    </>
  );
}
