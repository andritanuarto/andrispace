import React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const PrevNextButtons = () => {
  return (
    <div className="prev-next-buttons-container">
      <button className="btn btn--transparent"><ArrowLeftIcon/></button>
      <button className="btn btn--transparent"><ArrowRightIcon/></button>
    </div>
  );
}

export default PrevNextButtons;