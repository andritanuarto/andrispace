import React from 'react';
import { connect } from 'react-redux';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const mapStateToProps = ({ heroIndex }) => {
  return {
    heroIndex
  };
};

const PrevNextButtons = ({clickHandler, heroIndex, slidesLength}) => {
  const prevValue = (heroIndex - 1) < 0 ? 0 : heroIndex - 1;
  const nextValue = heroIndex >= (slidesLength - 1) ? slidesLength - 1 : heroIndex + 1;
  return (
    <div className="prev-next-buttons-container">
      <button
        className="btn btn--transparent"
        onClick={() => clickHandler(prevValue)}>
        <ArrowLeftIcon/>
      </button>
      <button className="btn btn--transparent" onClick={() => clickHandler(nextValue)}>
        <ArrowRightIcon/>
      </button>
    </div>
  );
}

export default connect(mapStateToProps)(PrevNextButtons);