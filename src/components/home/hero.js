import React from 'react';
import { connect } from 'react-redux';
import PrevNextButtons from '../shared/prevNextButtons';
import { handleHeroIndex } from '../../actions/ui';
import caseStudiesDirectory from '../../case-studies/case-studies-directory';
import HeroSlide from './hero-slide';

const mapDispatchToProps = (dispatch) => {
  return {
    handleHeroIndex: (heroIndex) => {
      dispatch(handleHeroIndex(heroIndex));
    }
  };
}

const mapStateToProps = ({ heroIndex }) => {
  return {
    heroIndex
  };
};

const Hero = ({heroIndex, handleHeroIndex}) => {
  const slideIndexHandler = (nextOrPrev) => {
    handleHeroIndex(nextOrPrev);
  }

  return (
    <div className="hero-container">
      <HeroSlide />
      <div className="hero-container__slide-nav-container">
        <div className="hero-container__slide-nav-center">
          {
            caseStudiesDirectory.map((slide, index) => {
              return (
                <div
                  key={slide.projectTitle}
                  className={`hero-container__slide-nav ${heroIndex === index ? 'hero-container__slide-nav--active' : null}`}
                  onClick={() => {slideIndexHandler(index)}}
                />
              )
            })
          }
          <div className="hero-container__slide-nav-center__controller">
            <strong><span key={heroIndex}>{`0${heroIndex + 1}`}</span> {`/ 0${caseStudiesDirectory.length}`}</strong>
            <PrevNextButtons clickHandler={slideIndexHandler} slidesLength={caseStudiesDirectory.length} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);