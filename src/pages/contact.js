import React from "react";
import Header from "../components/shared/header";
import InteriorContainer from '../components/shared/interior-container';
import instagram from '../img/instagram.svg';
import twitter from '../img/twitter.svg';
import github from '../img/github-cat.svg';

export default () => (
  <>
    <Header/>
    <InteriorContainer>
      <div className="interior-page__content">
        <div className="contact">
          <div className="contact__left-side">
            <h3>Contact</h3>
            <strong>Andri Tanuarto</strong>
            <span className="contact__email-detail">
              e-mail: <a href="mailto:andritanuarto@gmaio.com">andritanuarto@gmail.com</a>
            </span>
            <ul>
              <li><a href="#">{instagram}</a></li>
              <li><a href="#">{twitter}</a></li>
              <li><a href="#">{github}</a></li>
            </ul>
          </div>
          <div className="contact__right-side">
            <form className="contact__form" name="contact" method="POST" data-netlify="true">
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