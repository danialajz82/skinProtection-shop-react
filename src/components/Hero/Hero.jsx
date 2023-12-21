import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { BsArrowRight } from "react-icons/bs";
import { RiShoppingBagFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div className={css.container}>
      <div className={css.h_sides}>
        <span className={css.text1}>Skin protection cream</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            {" "}
            trendily say has suitable disposal and boy. Exrcise joy man children
            rejoiced.
          </span>
        </div>
      </div>

      <div className={css.warpper}>
        <div className={css.blueCircle}></div>
        <img src={HeroImg} alt="" width={600} />
        <div className={css.cart2}>
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best Signup Offers</span>
            
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m </span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100K</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
