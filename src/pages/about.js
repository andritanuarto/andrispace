import React from "react";
import Header from "../components/shared/header";

export default () => (
  <div className="interior-page about-page">
    <Header/>
    <div className="interior-page__content">
      <div className="interior-page__heading">
        <h1>
          Relentlessly trying to empathize with people, and help their life a little bit better.
        </h1>
      </div>
    </div>
    <div className="par par--normal-width">
      <p>
        I'm passionate about solving problems to make things better and enjoy collaboration to broaden my knowledge and seeing different perspectives. Over the past eight years, I've been helping companies and startups to create delightful experiences that connects people with design and technology.
      </p>
      <p>
        Having interesting project in mind? Just shoot me an <a href="mailto:andritanuarto@gmail.com">email</a> and let's chat.
      </p>
    </div>
    <div className="par par--normal-width spacing">
      <div className="about-page__skills">
        <div>
          <strong>Design Software</strong>
          <ul>
            <li>Sketch</li>
            <li>Adobe XD</li>
            <li>Invision Studio</li>
            <li>Photoshop</li>
            <li>Lightroom</li>
          </ul>
        </div>
        <div>
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
        <div>
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
