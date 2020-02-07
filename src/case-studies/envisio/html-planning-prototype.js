import React, { useState } from "react";
import PlanCard from './plan-card';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const PlanningHTMLPrototype = () => {
  const [runPrototype, setRunPrototype] = useState(false);
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

  const goalRow = (
    <div className="row row--goal">
      <div className="row__title">{firstLevel ? `Goal ${firstLevel} is selected` : 'Goal#'}</div>
      <div className="scrolling-wrapper-flexbox">
        {
          planningData.map((goal) => {
            return (
              <PlanCard
                label={goal.label}
                active={firstLevel === goal.label}
                levelName="Goal"
                clickHandler={() => {setLevel(goal.label, 1)}}
              />
            );
          })
        }
      </div>
    </div>
  );

  const strategyRow = (
    <div className="row row--strategy">
      <div className="row__title">{secondLevel ? `Strategy ${secondLevel} is selected` : `Strategy ${firstLevel}.#`}</div>
      <div className="scrolling-wrapper-flexbox">
        {
          firstLevel ? planningData.map((goal) => {
            return (
              <PlanCard
                label={`${firstLevel}.${goal.label}`}
                levelName="Strategy"
                active={secondLevel === `${firstLevel}.${goal.label}`}
                clickHandler={() => {setLevel(`${firstLevel}.${goal.label}`, 2)}}
              />
            );
          }) : <div className="card card--empty">Select a Goal from above level to see Strategies</div>
        }
      </div>
    </div>
  );

  const actionRow = (
    <div className="row row--action">
      <div className="row__title">Action {secondLevel ? `${secondLevel}.#` : '?'}</div>
      <div className="scrolling-wrapper-flexbox">
        {
          secondLevel ? planningData.map((goal, index) => {
            return (
              <PlanCard
                label={`${secondLevel}.${index+1}`}
                levelName="Action"
                clickHandler={() => {}}
              />
            );
          }) : <div className="card card--empty">Select a Strategy from above level to see Actions</div>
        }
      </div>
    </div>
  );

  const playOverlay = (
    <div className="envisio-plan__overlay">
      <button className="btn" onClick={() => {setRunPrototype(true)}}>Run The HTML Prototype <ArrowRightIcon/></button>
    </div>
  )

  return (
    <div className="envisio-plan">
      {runPrototype === false ? playOverlay : null}
      {goalRow}
      {strategyRow}
      {actionRow}
    </div>
  )
}

export default PlanningHTMLPrototype;