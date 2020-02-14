import React from 'react';
import { connect } from 'react-redux';
import PrevNextButtons from '../shared/prevNextButtons';
import { handleHeroIndex } from '../../actions/ui';
import HeroSlide from './hero-slide';
import { useStaticQuery, graphql } from "gatsby";

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

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allJavascriptFrontmatter {
        edges {
          node {
            frontmatter {
              clientName
            }
          }
        }
      }
    }
  `);

  const edges = data.allJavascriptFrontmatter.edges;

  return (
    <div className="hero-container">
      <HeroSlide />
      <div className="hero-container__slide-nav-container">
        <div className="hero-container__slide-nav-center">
          {
            edges.map((slide, index) => {
              return (
                <div
                  key={slide.node.frontmatter.clientName}
                  className={`hero-container__slide-nav ${heroIndex === index ? 'hero-container__slide-nav--active' : null}`}
                  onClick={() => {slideIndexHandler(index)}}
                />
              )
            })
          }
          <div className="hero-container__slide-nav-center__controller">
            <strong><span key={heroIndex}>{`0${heroIndex + 1}`}</span> {`/ 0${edges.length}`}</strong>
            <PrevNextButtons clickHandler={slideIndexHandler} slidesLength={edges.length} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);