import React, { useState } from "react";
import PlanCard from './plan-card';

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
      if (firstLevel === label) {
        setFirstLevel(null);
      } else {
        setFirstLevel(label);
      }
      setSecondLevel(null);
    } else {
      if (secondLevel === label) {
        setSecondLevel(null);
      } else {
        setSecondLevel(label);
      }
    }
  }

  console.log(firstLevel, secondLevel);

  const goalRow = (
    <div className="scrolling-wrapper-flexbox row row--goal">
      {
        planningData.map((goal) => {
          return (
            <PlanCard
              label={goal.label}
              levelName="Goal"
              clickHandler={() => {setLevel(goal.label, 1)}}
            />
          );
        })
      }
    </div>
  );

  const strategyRow = (
    <div className="scrolling-wrapper-flexbox row row--strategy">
      {
        planningData.map((goal) => {
          return (
            <PlanCard
              label={`${firstLevel}.${goal.label}`}
              levelName="Strategy"
              clickHandler={() => {setLevel(`${firstLevel}.${goal.label}`, 2)}}
            />
          );
        })
      }
    </div>
  );

  const actionRow = (
    <div className="scrolling-wrapper-flexbox row row--action">
      {
        planningData.map((goal, index) => {
          return (
            <PlanCard
              label={`${secondLevel}.${index+1}`}
              levelName="Action"
              clickHandler={() => {}}
            />
          );
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