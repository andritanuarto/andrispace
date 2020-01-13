import React from 'react';
import ImgSection from '../../components/interior/img-section';
import magzCovers from './magazine-covers.jpeg';

const caseStudyContent = (
  <>
    <div className="par par--normal-width">
      <p>
        <h2>Client Background</h2>
        When I studied at <a href="https://redacademy.com/vancouver/" target="_blank">RED Academy Vancouver</a>, I was given a great opportunity to work with <a href="https://www.adbusters.org/" target="_blank">Adbusters</a> for our client project. Adbusters is a Canadian-based publishing magazine organization and they have a strong presence in the North American market for a political art magazine.
      </p>
      <p>
        Anti-capitalism, subvertisements, environmental and political movements are some of their typical content in their magazine.
      </p>
      <p>
        What's unique about Adbusters magazine is the unusual style compare to other magazines. Their approach of anti-big commercial means consistency of their branding, visual, and content is almost non-existent.
      </p>
      <p>
        <ImgSection
          imgs={[{url: magzCovers}]}
          caption="Adbusters magazine covers. Notice there is no branding consistency throughout their editions.
          "
        />
      </p>
    </div>
  </>
);

export default caseStudyContent;