import React from 'react';
import ImgSection from '../../components/interior/img-section';
import magzCovers from './magazine-covers.jpeg';

const caseStudyContent = (
  <>
    <div className="par par--normal-width">
      <p>
        <h2>Client Background</h2>
        When I studied at <a href="https://redacademy.com/vancouver/" target="_blank">RED Academy Vancouver</a>, my team was given a great opportunity to work with <a href="https://www.adbusters.org/" target="_blank">Adbusters</a> for our client project. Adbusters is a Canadian-based publishing magazine organization with a strong presence in the North American market for a political art magazine. Anti-capitalism, subvertisements, environmental and political movements are some of their typical content in their magazine.
      </p>
      <p>
      What's unique about Adbusters magazine is the unusual style compare to other magazines. Their approach of anti-big commercial means consistency of their branding, visual, and content is almost non-existent unlike what most commercial companies do.
      </p>
      <p>
        <ImgSection
          imgs={[{url: magzCovers}]}
          caption="Adbusters magazine covers. Notice there is no branding consistency throughout their editions.
          "
        />
      </p>
      <p>
        Besides publishing magazine, Adbusters also actively organizes and involves different social campaigns like <a href="https://en.wikipedia.org/wiki/Culture_jamming" target="_blank">Culture Jamming</a>, <a href="http://abillionpeople.org/8th-anniversary-of-occupywallstreet/" target="_blank">Occupy Wall Street</a> and <a href="http://abillionpeople.org/buy-nothing-day-2019/">Buy Nothing Day</a>.
      </p>
      <p>
        <h2>Project Brief</h2>
        With the constant growth of digital technology and mobile users, Adbusters need a mobile platform where they can communicate and voicing their campaigns to their subscribers in a more direct and timely way.
      </p>
      <p>
        When we had this project kick-off meeting, they wanted to name this app as the "World Revolution"; the sole purpose of this app is to be able to inform and remind their subscribers about campaigns they are interested to join. Initially, Because Adbusters does not believe in collecting any data from users as most corporations do, they wanted to have two-way communication without having the user to log in. On the other hand without login there is no way to personalized app for each user and the app will be prone to get a lot spams. After some expressing our concern Adbusters agreed to collect minimum information just username, email and password.
      </p>
    </div>
  </>
);

export default caseStudyContent;