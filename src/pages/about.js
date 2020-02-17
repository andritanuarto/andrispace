import React from 'react';
import Header from '../components/shared/header';
import andri from '../img/andri.jpg';
import sketch from '../img/sketch.svg';
import xd from '../img/xd.svg';
import indesign from '../img/indesign.svg';
import lightroom from '../img/lightroom.svg';
import photoshop from '../img/photoshop.svg';
import illustrator from '../img/illustrator.svg';
import invision from '../img/invision.svg';

export default () => (
  <div className="interior-page about-page">
    <Header/>
    <div className="about-page__container">
      <div className="about-page__left" style={{backgroundImage: `url(${andri})`}} />
      <div className="about-page__right">
        {/* <h1>
          Let's Humanize The Design & Technology
        </h1> */}
        <h1>Hello, I'm Andri Tanuarto.</h1>
        <p className="first-par">
          I'm a UI / UX designer and front-end engineer from Vancouver, Canada
        </p>
        <p>
          To me, a great product is one that helps people make their lives better.  For the past eight years, I've been helping companies and startups create meaningful experiences that connect people with design and technology.
        </p>
        <p>
          Outside work, I enjoy scale-modeling super cars from the 80s and 90s to keep my creative juice flowing, and remain active by playing sports like soccer, badminton, tennis, table-tennis, volleyball, you name it.
        </p>
        <p>Little bit more about myself from the technical perspective</p>
        <div className="about-page__skills">
          <div className="about-page__skills__col">
            <strong>Design Software</strong>
            <ul>
              <li><img src={sketch} height={48} title="Sketch" /></li>
              <li><img src={invision} height={48} title="Invision" /></li>
              <li><img src={xd} height={48} title="Adobe XD" /></li>
              <li><img src={photoshop} height={48} title="Adobe Photoshop" /></li>
              <li><img src={lightroom} height={48} title="Adobe Lightroom" /></li>
              <li><img src={illustrator} height={48} title="Adobe Illustrator" /></li>
              <li><img src={indesign} height={48}  title="Adobe Indesign" /></li>
            </ul>
          </div>
          <div className="about-page__skills__col">
            <strong>Development</strong>
            <ul>
              <li><code>HTML/HAML</code></li>
              <li><code>CSS/SCSS/LESS</code></li>
              <li><code>React</code></li>
              <li><code>Redux</code></li>
              <li><code>Gatsby Js</code></li>
              <li><code>jQuery</code></li>
              <li><code>Vanilla Javascript</code></li>
              <li><code>Wordpress</code></li>
            </ul>
          </div>
          <div className="about-page__skills__col">
            <strong>UI / UX process</strong>
            <ul>
              <li>User Research</li>
              <li>User Testing</li>
              <li>Prototyping</li>
              <li>Wireframes cration</li>
              <li>Agile Methodology</li>
              <li>Atomic Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
