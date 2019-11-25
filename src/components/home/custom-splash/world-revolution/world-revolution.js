import React from 'react';
import IllustrationText from "./world-revolution-the-app.png";
import IllustrationEarth from "./world-revolution-earth.png";
import IllustrationBg from "./world-revolution-bg.jpg";

export default (props) => {
  return (
    <div className="world-revolution" style={{width: '100%', position: 'relative'}}>
      <div className="world-revolution__content" style={{background: `url(${IllustrationBg}`}}>
        <div className="world-revolution__img-container">
          <img className="world-revolution__logo-text" src={IllustrationText} alt="World Revolution The App" />
          <img className="world-revolution__logo-earth" src={IllustrationEarth} alt="World Revolution" />
        </div>
      </div>
    </div>
  )
}