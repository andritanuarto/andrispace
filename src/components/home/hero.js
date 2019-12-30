import React from "react";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { connect } from "react-redux";

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
      logoLink: '',
      heroBackground: ''
    }
  ]


  return (
    <div className="hero-container">
      <div className="hero-container__slide">
        <div className="hero-container__project-info">
          <div className="hero-container__project-info--l">
            <span>Project Client</span>
          </div>
          <div className="hero-container__project-info--r">
            <h1>World Revolution</h1>
            <span>an app for organizing social activity campaigns</span>
          </div>
        </div>
      </div>
      <div className="hero-container__bottom-spacing"/>
      <div className="hero-container__slide-nav-container">
        <div className="hero-container__slide-nav-center">
          <strong>Recent Projects</strong>
          <div className="hero-container__slide-nav-center__controller">
            <span>01 / 04</span>
            <button><ArrowLeftIcon/></button>
            <button><ArrowRightIcon/></button>
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