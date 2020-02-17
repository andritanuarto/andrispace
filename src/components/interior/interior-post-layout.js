import React from 'react';
import Header from '../shared/header';
import InteriorContainer from '../shared/interior-container';

export default ({ caseStudyContent, children }) => {
  return (
    <>
      <Header/>
      <InteriorContainer>
        <div className="interior-page__content">
          <div className="interior-page__heading">
            <h1>{caseStudyContent.postTitle} </h1>
            <span className="interior-page__heading__date">{caseStudyContent.projectDate}</span>
          </div>
          <div className="interior-page__heading__img">
            <img src={caseStudyContent.caseStudyBanner} alt={caseStudyContent.postTitle}/>
          </div>
          {children}
        </div>
      </InteriorContainer>
    </>
  )
}