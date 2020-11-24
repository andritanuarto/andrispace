import React from 'react';
import { connect } from 'react-redux';
import { Link, withPrefix } from "gatsby";
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import heroImgAdbusters from '../../img/adbusters/hero.jpg';
import heroImgUtg from '../../img/utg/utg-case-study-banner.jpg';
import heroImgEnvisio from '../../img/envisio/envisio-bg.jpg';
import heroImgVinylFanatics from '../../img/vinyl-fanatics/hero.jpg';

import logoImgAdbusters from '../../img/adbusters/splash-adbusters.png';
import logoImgUtg from '../../img/utg/utg-splash.png';
import logoImgEnvisio from '../../img/envisio/planning-banner.png';

const mapStateToProps = ({ heroIndex }) => {
  return {
    heroIndex
  };
};

const HeroSlide = ({heroIndex, edges, baseURL}) => {
  const slide = edges[heroIndex].node.frontmatter;

  let heroImg;
  let logoImg;

  switch(slide.clientName.toLowerCase()) {
    case 'envisio':
      heroImg = heroImgEnvisio;
      logoImg = logoImgEnvisio;
      break;
    case 'adbusters':
      heroImg = heroImgAdbusters;
      logoImg = logoImgAdbusters;
      break;
    case 'utg academy':
      heroImg = heroImgUtg;
      logoImg = logoImgUtg;
      break;
    default:
      heroImg = heroImgVinylFanatics;
      logoImg = heroImgVinylFanatics;
      break;
  }

  console.log(withPrefix(), 'withPrefix');

  return (
    <>
      <div key={slide.url} className="hero-container__background" style={{backgroundImage: `url(${heroImg})`}}/>
      <div className="overlay" style={{backgroundColor: slide.opacityColor, opacity: slide.opacityLevel}}/>
      <div key={slide.clientName} className="hero-container__slide">
        <div className="hero-container__project-info">
          <div className="hero-container__project-info--l">
            <img style={{width: slide.logoWidth}} src={logoImg} alt={slide.clientName}/>
          </div>
          <div className="hero-container__project-info--r">
            <h1 >{slide.projectTitle}</h1>
            <span >{slide.blurb}</span>
            <Link
              to={`${slide.url}`}
              className="btn btn--reverse"
            >
              read more <ArrowRightAlt/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps)(HeroSlide);