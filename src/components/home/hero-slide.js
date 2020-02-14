import React from 'react';
import { connect } from 'react-redux';
import { Link } from "gatsby";
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import caseStudiesDirectory from '../../case-studies/case-studies-directory';

const mapStateToProps = ({ heroIndex }) => {
  return {
    heroIndex
  };
};

const HeroSlide = ({heroIndex, handleHeroIndex}) => {
  const slideIndex = caseStudiesDirectory[heroIndex];

  return (
    <>
      <div className="hero-container__background" style={{backgroundImage: `url(${slideIndex.heroBackground})`}}/>
      <div className="overlay" style={{backgroundColor: slideIndex.opacityColor, opacity: slideIndex.opacityLeve}}/>
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
    </>
  );
}

export default connect(mapStateToProps)(HeroSlide);