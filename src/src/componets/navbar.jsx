import React from "react";
import clases from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={clases.navbar}>
      <ui>
        <li className={clases.item}>
          <a> Profile</a>
        </li>
        <li className={clases.item}>
          <a>Messeges</a>
        </li>
        <li className={clases.item}>
          <a>News</a>
        </li>
        <li className={clases.item}>
          <a>Music</a>
        </li>
        <li className={clases.item}>
          <a>Setting</a>
        </li>
      </ui>
    </div>
  );
};

export default Navbar;
