import React from "react";
import Logo from "./logo";
import Hamburger from "./hamburger";

export default ({navColor}) => {
  return (
    <div className={`header header-${navColor}`}>
      <Logo/>
      <Hamburger/>
    </div>
  )
}