import React from 'react';

const InteriorContainer = ({children, additionalClass}) => {
  return (
    <div className={`interior-page ${additionalClass}`}>
      {children}
    </div>
  );
};

InteriorContainer.defaultProps = {
  additionalClass: ''
}

export default InteriorContainer;