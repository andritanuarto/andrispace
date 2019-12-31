import React, { useState } from 'react';
import { connect } from 'react-redux';
import PrevNextButtons from '../shared/prevNextButtons';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import { handleHeroIndex } from '../../actions/ui';

import adbustersLogo from './hero-images/adbusters/adbusters-logo.png';
import adbustersBackground from './hero-images/adbusters/social-protest.jpg';
import utgLogo from './hero-images/utg/utg-logo.png';
import utgBackground from './hero-images/utg/utg-class.jpg';

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
  const slides = [
    {
      clientName: 'Adbusters',
      projectTitle: 'World Revolution',
      blurb: 'an app for organizing social activity campaigns',
      logoLink: adbustersLogo,
      heroBackground: adbustersBackground,
      opacityColor: '#000000',
      opacityLevel: '0.5'
    },
    {
      clientName: 'Under The Gui (UTG)',
      projectTitle: 'Under The Gui (UTG)',
      blurb: 'coding school for kids website redesign',
      logoLink: utgLogo,
      logoWidth: '100px',
      heroBackground: utgBackground,
      opacityColor: '#000000',
      opacityLevel: '0.3'
    }
  ];
  const slideIndexHandler = (nextOrPrev) => {
    handleHeroIndex(nextOrPrev);
  }

  const slideIndex = slides[heroIndex];

  return (
    <div className="hero-container">
      <div
        key={slideIndex.clientName}
        className="hero-container__slide"
        style={{backgroundImage: `url(${slideIndex.heroBackground})`}}
      >
        <div
          className="hero-container__overlay"
          style={{
            backgroundColor: slideIndex.opacityColor,
            opacity: slideIndex.opacityLevel
          }}
        />
        <div className="hero-container__project-info">
          <div className="hero-container__project-info--l">
            <span>Project Client</span>
            <img style={{width: slideIndex.logoWidth || null }} src={slideIndex.logoLink} alt={slideIndex.clientName}/>
          </div>
          <div className="hero-container__project-info--r">
            <h1>{slideIndex.projectTitle}</h1>
            <span>{slideIndex.blurb}</span>
            <button className="btn btn--primary">Read The Case Study <ArrowRightAlt/></button>
          </div>
        </div>
      </div>
      <div className="hero-container__bottom-spacing"/>
      <div className="hero-container__slide-nav-container">
        <div className="hero-container__slide-nav-center">
          <strong className="hero-container__slide-nav-center--label">Recent Projects</strong>
          <div className="hero-container__slide-nav-center__controller">
            <strong><span>{`0${heroIndex + 1}`}</span> {`/ 0${slides.length}`}</strong>
            <PrevNextButtons clickHandler={slideIndexHandler} slidesLength={slides.length}/>
          </div>
          {
            slides.map((slide, index) => {
              return (
                <div
                  className={`hero-container__slide-nav ${heroIndex === index ? 'hero-container__slide-nav--active' : null}`}
                  onClick={() => {slideIndexHandler(index)}}
                >
                  <div
                    className="hero-container__slide-nav-inner"
                    style={{backgroundImage: `url(${slide.heroBackground})`}}
                  >
                    <strong>{slide.projectTitle}</strong>
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