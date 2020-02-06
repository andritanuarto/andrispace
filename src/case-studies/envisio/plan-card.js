import React from "react";

const PlanCard = ({levelName, label, clickHandler}) => {
  return (
    <div key={label} className="card" onClick={() => {clickHandler()}}>
      <span className="card__title">{`${levelName} ${label}`}</span>
    </div>
  )
}

export default PlanCard;