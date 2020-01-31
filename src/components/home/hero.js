import React from 'react';
import { Link } from "gatsby";
import { connect } from 'react-redux';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import PrevNextButtons from '../shared/prevNextButtons';
import { handleHeroIndex } from '../../actions/ui';
import caseStudiesDirectory from '../../case-studies/case-studies-directory';

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

  const slideIndex = caseStudiesDirectory[heroIndex];

  return (
    <div className="hero-container" style={{backgroundImage: `url(${slideIndex.heroBackground})`}}>
      <div
        className="hero-container__overlay"
        style={{
          backgroundColor: slideIndex.opacityColor,
          opacity: slideIndex.opacityLevel
        }}
      />
      <div
        key={slideIndex.clientName}
        className="hero-container__slide"
      >
        <div className="hero-container__project-info">
          <div className="hero-container__project-info--l">
            <img style={{width: slideIndex.logoWidth || null }} src={slideIndex.logoLink} alt={slideIndex.clientName}/>
          </div>
          <div className="hero-container__project-info--r">
            <h1 >{slideIndex.projectTitle}</h1>
            <span >{slideIndex.blurb}</span>
            <Link
              to={slideIndex.url}
              className="btn btn--call-to-action"
            >
              Read The Case Study <ArrowRightAlt/>
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-container__bottom-spacing"/>
      <div className="hero-container__slide-nav-container">
        <div className="hero-container__slide-nav-center">
          <strong className="hero-container__slide-nav-center--label">Recent Projects</strong>
          <div className="hero-container__slide-nav-center__controller">
            <strong><span key={heroIndex}>{`0${heroIndex + 1}`}</span> {`/ 0${caseStudiesDirectory.length}`}</strong>
            <PrevNextButtons clickHandler={slideIndexHandler} slidesLength={caseStudiesDirectory.length} />
          </div>
          {
            caseStudiesDirectory.map((slide, index) => {
              return (
                <div
                  key={slide.projectTitle}
                  className={`hero-container__slide-nav ${heroIndex === index ? 'hero-container__slide-nav--active' : null}`}
                  onClick={() => {slideIndexHandler(index)}}
                >
                  <div
                    className="hero-container__slide-nav-inner"
                    style={{backgroundImage: `url(${slide.heroBackground})`}}
                  >
                    {heroIndex === index || <div className="box--overlay box--overlay--dark"/>}
                    <strong>{slide.clientName}</strong>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);