import React from 'react';
import { connect } from 'react-redux';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

export const mapStateToProps = ({ heroIndex }) => {
  return {
    heroIndex
  };
};

export const handlePrevNextValue = (buttonType, index, length) => {
  if (buttonType === 'prev') {
    return (index - 1) <= 0 ? 0 : index - 1;
  } else {
    return index >= (length - 1) ? length - 1 : index + 1;
  }
}

export const PrevNextButtons = ({clickHandler, heroIndex, slidesLength}) => {
  return (
    <div className="prev-next-buttons-container">
      <button
        className="btn btn--transparent"
        onClick={() => clickHandler(handlePrevNextValue('prev', heroIndex))}>
        <ArrowLeftIcon/>
      </button>
      <button 
        className="btn btn--transparent"
        onClick={() => clickHandler(handlePrevNextValue('next', heroIndex, slidesLength))}>
        <ArrowRightIcon/>
      </button>
    </div>
  );
}

export default connect(mapStateToProps)(PrevNextButtons);