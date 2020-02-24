import React from "react";
import Fade from 'react-reveal/Fade';
import Header from "../components/shared/header";
import InteriorContainer from '../components/shared/interior-container';
import instagram from '../img/instagram.svg';
import twitter from '../img/twitter.svg';
import github from '../img/github-cat.svg';
import linkedin from '../img/linkedin.svg';
import SVG from 'react-inlinesvg';

export default () => (
  <>
    <Header/>
    <InteriorContainer>
      <div className="interior-page__content">
        <div className="contact">
          <div className="contact__left-side">
            <strong>Andri Tanuarto</strong>
            <span className="contact__email-detail">
              e-mail: <a href="mailto:andritanuarto@gmaio.com">andritanuarto@gmail.com</a>
            </span>
            <span className="contact__email-detail">
              phone: <a href="tel:andritanuarto@gmaio.com">+1 604-728-0786</a>
            </span>
            <ul className="contact__social-media-links">
              <li><a target="_blank" href="http://instagram.com/andritanuarto"><SVG src={instagram} /></a></li>
              <li><a target="_blank" href="https://twitter.com/andritanuarto" href="#"><SVG src={twitter} /></a></li>
              <li><a target="_blank" href="https://github.com/andritanuarto"><SVG src={github} /></a></li>
              <li><a target="_blank" href="https://www.linkedin.com/in/andritanuarto/"><SVG src={linkedin} /></a></li>
            </ul>
          </div>
          <div className="contact__right-side">
            <form className="contact__form" name="contact" action="/thank-you" method="POST" data-netlify="true">
              <input type="hidden" name="form-contact" value="Contact Form" />
              <h3>Send me a message</h3>
              <p>
                <label>
                  Full Name <span className="required">*</span>
                  <input type="text" name="name" placeholder="type your full name" />
                </label>
              </p>
              <p>
                <label>
                  Email <span className="required">*</span>
                  <input type="email" name="email" placeholder="type your email" />
                </label>
              </p>
              <p>
                <label>
                  Message <span className="required">*</span>
                  <textarea name="message" placeholder="type your message"></textarea>
                </label>
              </p>
              <p>
                <button className="btn" type="submit">Send</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </InteriorContainer>
  </>
)