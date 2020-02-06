import React, { useState } from "react";

const PlanningHTMLPrototype = () => {
  const [firstLevel, setFirstLevel] = useState(null);
  const [secondLevel, setSecondLevel] = useState(null);
  const planningData = [
    {label: 1},
    {label: 2},
    {label: 3},
    {label: 4},
    {label: 5},
    {label: 6},
    {label: 7},
    {label: 8},
    {label: 9},
    {label: 10},
  ];

  const setLevel = (label, level) => {
    if (level === 1) {
      if (firstLevel) {
        setFirstLevel(null);
        setSecondLevel(null);
      } else {
        setFirstLevel(label);
        setSecondLevel(null);
      }
    } else {
      if (secondLevel !== null) {
        setSecondLevel(null);
      } else {
        setSecondLevel(label);
      }
    }
  }

  console.log(firstLevel, secondLevel);

  const goalRow = (
    <div className="scrolling-wrapper-flexbox">
      {
        planningData.map((goal) => {
          return (
            <div
              className="card"
              onClick={() => {setLevel(goal.label, 1)}}
              key={goal.label}
            >
              Goal{goal.label}
            </div>
          )
        })
      }
    </div>
  );

  const strategyRow = (
    <div className="scrolling-wrapper-flexbox">
      {
        planningData.map((goal, index) => {
          return (
            <div
              className="card"
              onClick={() => {setLevel(`${firstLevel}.${goal.label}`, 2)}}
              key={goal.label}
            >
              {`Strategy ${firstLevel}.${goal.label}`}
            </div>
          )
        })
      }
    </div>
  );

  const actionRow = (
    <div className="scrolling-wrapper-flexbox">
      {
        planningData.map((goal, index) => {
          return (
            <div
              className="card"
              key={goal.label}
            >
              {`Action ${secondLevel}.${index+1}`}
            </div>
          )
        })
      }
    </div>
  );


  return (
    <div className="envisio-plan">
      {goalRow}
      {firstLevel !== null ? strategyRow : null}
      {secondLevel !== null ? actionRow : null}
    </div>
  )
}

export default PlanningHTMLPrototype;