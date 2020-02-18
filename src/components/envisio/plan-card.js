import React from "react";

const PlanCard = ({active, levelName, label, clickHandler}) => {
  return (
    <div key={label} className={`card card${active ? '--active' : ''}`} onClick={() => {clickHandler()}}>
      {active ? <div className="card__stick"/> : null}
      <span className="card__title">{`${levelName} ${label}`}</span>
      <div className="card__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </div>
  )
}

export default PlanCard;