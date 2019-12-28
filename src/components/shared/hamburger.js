import React from "react";

export default ({navColor}) => {
  return (
    <button
      className="hamburger hamburger--elastic"
      type="button"
      aria-label="Menu"
      aria-controls="navigation"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  )
}