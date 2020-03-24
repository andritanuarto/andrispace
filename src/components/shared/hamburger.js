import React from "react";

export default ({navColor, navigationOpen, handleNavigation}) => {
  return (
    <button
      className={`hamburger hamburger--elastic ${navigationOpen ? 'is-active' : ''}`}
      type="button"
      aria-label="Menu"
      aria-controls="navigation"
      data-test="hamburger"
      onClick={() => {handleNavigation(!navigationOpen)}}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  )
}