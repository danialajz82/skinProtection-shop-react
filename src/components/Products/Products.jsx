import React from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
const Products = () => {
  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our Featured Product</h1> 
    </div>
  );
};

export default Products;
