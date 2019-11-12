import React from "react";
import Logo from "./logo";
import Hamburger from "./hamburger";

export default ({navColor, logoColor}) => {
  return (
    <div className="header">
      <Logo logoColor={logoColor}/>
      <Hamburger navColor={navColor}/>
    </div>
  )
}