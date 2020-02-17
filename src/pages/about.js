import React from "react";
import Header from "../components/shared/header";
import andri from "../img/andri.jpg";
export default () => (
  <div className="interior-page about-page">
    <Header/>
    <div className="interior-page__content">
      <div className="interior-page__heading">
        <h1>
          Let's Humanize The Design & Technology
        </h1>
      </div>
    </div>
    <div className="par par--normal-width">
      <img src={andri} alt="Andri Tanuarto" />
      <p>
        <strong>Hello, I'm Andri Tanuarto.</strong>
      </p>
      <p>I'm a UI / UX designer and front-end engineer from Vancouver, Canada.</p>
      <p>
        To me, a great product is one that helps people make their lives better.  For the past eight years, I've been helping companies and startups create meaningful experiences that connect people with design and technology.
      </p>
      <p>
        Outside work, I enjoy scale-modeling super cars from the 80s and 90s to keep my creative juice flowing, and remain active by playing sports like soccer, badminton, tennis, table-tennis, volleyball, you name it.
      </p>
    </div>
    <div className="par par--normal-width spacing">
      <p>Little bit more about me from the technical perspective</p>
      <div className="about-page__skills">
        <div className="about-page__skills-col">
          <strong>Design Software</strong>
          <ul>
            <li>Sketch</li>
            <li>Adobe XD</li>
            <li>Invision Studio</li>
            <li>Photoshop</li>
            <li>Lightroom</li>
          </ul>
        </div>
        <div className="about-page__skills-col">
          <strong>Programming</strong>
          <ul>
            <li>HTML / HAML</li>
            <li>CSS / SCSS / LESS</li>
            <li>React</li>
            <li>Redux</li>
            <li>Gatsby Js</li>
            <li>jQuery</li>
            <li>Vanilla Javascript</li>
            <li>Wordpress</li>
          </ul>
        </div>
        <div className="about-page__skills-col">
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
);
