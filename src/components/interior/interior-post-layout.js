import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../shared/header';
import InteriorContainer from '../shared/interior-container';

const InteriorPostLayout = ({ caseStudyContent, children }) => {
  return (
    <>
      <Header/>
      <InteriorContainer>
        <div className="interior-page__content">
          <div className="interior-page__heading">
            <h1>{caseStudyContent.postTitle} </h1>
            <span className="interior-page__heading__date">{caseStudyContent.projectDate}</span>
          </div>
          {
            caseStudyContent.caseStudyBanner
            ?
              <div className="interior-page__heading__img">
                <img src={caseStudyContent.caseStudyBanner} alt={caseStudyContent.postTitle}/>
              </div>
            :
              null
          }
          {children}
        </div>
      </InteriorContainer>
    </>
  );
}

export default InteriorPostLayout;