import React from 'react';
import InteriorContainer from '../components/shared/interior-container';
import Header from '../components/shared/header';
import andri from '../img/andri.jpg';
import sketch from '../img/sketch.svg';
import xd from '../img/xd.svg';
import indesign from '../img/indesign.svg';
import lightroom from '../img/lightroom.svg';
import photoshop from '../img/photoshop.svg';
import illustrator from '../img/illustrator.svg';
import invision from '../img/invision.svg';
import iterm from '../img/iterm.png';
import vs from '../img/vs.svg';
import github from '../img/github.svg';

export default () => (
  <>
    <Header/>
    <InteriorContainer additionalClass="about-page">
      <div className="about-page__container">
        <div className="about-page__left" style={{backgroundImage: `url(${andri})`}} />
        <div className="about-page__right">
          <h1>Hello, I'm Andri Tanuarto.</h1>
          <p className="first-par">
            I'm a UI / UX designer and front-end engineer from Vancouver, Canada
          </p>
          <p>
            To me, a great product is one that helps people to make their lives better.  For the past eight years, I've been helping companies and startups to create meaningful experiences that connect people with design and technology.
          </p>
          <p>
            Originally I started working as a UI developer, but along the way, my interest grew in UI / UX field. Outside work, I enjoy scale-modelling supercars from the 80s and 90s to keep my creative juice flowing, and remain active by playing many sports like soccer, badminton, tennis, table-tennis, volleyball, you name it.
          </p>
          <h2>A Little bit more about myself from the technical perspective</h2>
          <div className="about-page__skills">
            <div className="about-page__skills__col">
              <strong>Tools that I use</strong>
              <ul>
                <li><img alt="Sketch" src={sketch} height={48} title="Sketch" /></li>
                <li><img alt="Invision" src={invision} height={48} title="Invision" /></li>
                <li><img alt="Adobe XD" src={xd} height={48} title="Adobe XD" /></li>
                <li><img alt="Adobe Photoshop" src={photoshop} height={48} title="Adobe Photoshop" /></li>
                <li><img alt="Adobe Lightroom" src={lightroom} height={48} title="Adobe Lightroom" /></li>
                <li><img alt="Adobe Illustrator" src={illustrator} height={48} title="Adobe Illustrator" /></li>
                <li><img alt="Adobe Indesign" src={indesign} height={48}  title="Adobe Indesign" /></li>
                <li><img alt="Adobe Visual Studio Code" src={vs} height={48}  title="Visual Studio Code" /></li>
                <li><img alt="iTerm" src={iterm} height={54}  title="iTerm" /></li>
                <li><img alt="Github" src={github} height={54}  title="Github Desktop" /></li>
              </ul>
            </div>
            <div className="about-page__skills__col">
              <strong>UI / UX process</strong>
              <ul>
                <li><span className="process">User Research</span></li>
                <li><span className="process">User Testing</span></li>
                <li><span className="process">User Flow</span></li>
                <li><span className="process">Sitemap</span></li>
                <li><span className="process">Prototyping</span></li>
                <li><span className="process">Wireframes</span></li>
                <li><span className="process">Agile Methodology</span></li>
                <li><span className="process">Atomic Design</span></li>
              </ul>
            </div>
            <div className="about-page__skills__col">
              <strong>Development</strong>
              <ul>
                <li><code>HTML/HAML</code></li>
                <li><code>CSS/SCSS/LESS</code></li>
                <li><code>Flexbox</code></li>
                <li><code>React</code></li>
                <li><code>Redux</code></li>
                <li><code>Gatsby Js</code></li>
                <li><code>Vanilla Javascript</code></li>
                <li><code>jQuery</code></li>
                <li><code>REST API</code></li>
                <li><code>Git</code></li>
                <li><code>Bootstrap</code></li>
                <li><code>Wordpress</code></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </InteriorContainer>
  </>
);
