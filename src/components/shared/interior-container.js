import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ navigationOpen }) => {
  return {
    navigationOpen
  };
};

const InteriorContainer = ({children, additionalClass, navigationOpen}) => {
  return (
    <div
      className={`interior-page ${additionalClass} ${navigationOpen ? 'interior-page--overflow-hidden' : ''}`}
    >
      {children}
    </div>
  );
};

InteriorContainer.defaultProps = {
  additionalClass: ''
}

export default connect(mapStateToProps)(InteriorContainer);