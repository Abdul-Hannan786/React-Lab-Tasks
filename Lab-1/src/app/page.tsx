"use client";
 
import { useState } from "react";
import AllProducts from "./AllProducts";
import MyInfo from "./MyInfo";
import Categories from "./Categories";

export default function Home() {

  const [categList, setCategList] = useState([
    "Phones", "Gadgets", "Clothes", "Cars", "Electronics"
  ])

  return (
    <>
      <MyInfo />
      <Categories categories={categList} />
      <AllProducts />
    </>
  );
}
