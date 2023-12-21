import React from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import {CgShoppingBag} from "react-icons/cg"

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <span>amazon</span>
        <img src={Logo} alt="" />
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Clloections</li>
            <li>Brands</li>
            <li>News</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        </div>
        <input type="text" className={css.search}  placeholder="search"/>
        <CgShoppingBag className={css.cart}/>
      </div>
    </div>
  );
};

export default Header;
