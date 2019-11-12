import React from "react";

export default ({navColor}) => {
  return (
    <button className="hamburger">
      <hr style={{background: navColor}}/>
      <hr style={{background: navColor}}/>
    </button>
  )
}