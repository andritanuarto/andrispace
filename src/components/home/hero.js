import React from 'react';
import { connect } from 'react-redux';
import adbustersLogo from './hero-images/adbusters/adbusters-logo.png';
import adbustersBackground from './hero-images/adbusters/social-protest.jpg';
import PrevNextButtons from '../shared/prevNextButtons';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';

const mapStateToProps = ({ heroIndex }) => {
  return {
    heroIndex
  };
};

const Hero = ({heroIndex}) => {
  const slides = [
    {
      clientName: 'Adbusters',
      porjectTitle: 'World Revolution',
      blurb: 'an app for organizing social activity campaigns',
      logoLink: adbustersLogo,
      heroBackground: '',
      opacityColor: '#000000',
      opacityLevel: '0.5'
    }
  ]

  const slideIndex = slides[heroIndex];

  return (
    <div className="hero-container">
      <div
        className="hero-container__slide"
        style={{backgroundImage: `url(${adbustersBackground})`}}
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
            <img src={slideIndex.logoLink} alt={slideIndex.clientName}/>
          </div>
          <div className="hero-container__project-info--r">
            <h1>World Revolution</h1>
            <div>an app for organizing social activity campaigns</div>
            <button className="btn btn--primary">View Case Study <ArrowRightAlt/></button>
          </div>
        </div>
      </div>
      <div className="hero-container__bottom-spacing"/>
      <div className="hero-container__slide-nav-container">
        <div className="hero-container__slide-nav-center">
          <strong className="hero-container__slide-nav-center--label">Recent Projects</strong>
          <div className="hero-container__slide-nav-center__controller">
            <strong><span>{`0${heroIndex + 1}`}</span> {`/ 0${slides.length}`}</strong>
            <PrevNextButtons/>
          </div>
          <div className="hero-container__slide-nav">
            <div className="hero-container__slide-nav-inner"/>
          </div>
          <div className="hero-container__slide-nav">
            <div className="hero-container__slide-nav-inner"/>
          </div>
          <div className="hero-container__slide-nav">
            <div className="hero-container__slide-nav-inner"/>
          </div>
          <div className="hero-container__slide-nav">
            <div className="hero-container__slide-nav-inner"/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default connect(mapStateToProps)(Hero);