import React from "react";
import InteriorPostLayout from "../../components/interior/interior-post-layout";
import caseStudyBanner from '../../img/vinyl-fanatics/case-study-banner.jpeg';

export const frontmatter = {
  clientName: 'Vinyl Fanatics',
  projectDate: '2019-05-15',
  status: 'draft',
  projectTitle: 'Vinyl Fanatics – An online store for vinyl collectors',
  postTitle: 'An online store for Vinyl Fanatics',
  blurb: 'Buy records online to grow your music collection',
  logoWidth: 'auto',
  opacityColor: '#000000',
  opacityLevel: '0.7',
  url: './case-studies/vinyl-fanatics',
  heroImg: '../../img/vinyl-fanatics/hero.jpg',
  summary: 'Way before mp3, cd even cassette, the vinyl records enjoyed the popularity among music lovers'
};

export default () => (
  <InteriorPostLayout
    caseStudyContent={{
      postTitle: frontmatter.postTitle,
      projectDate: frontmatter.projectDate,
      caseStudyBanner: caseStudyBanner
    }}
  >
    <>
      <div className="par par--normal-width">
        <p className="first-paragraph">
          Way before mp3, cd even cassette, the vinyl records enjoyed the popularity among music lovers. It was the primary medium for music reproduction in the 20th century. Although the industry faced stiff competition when the compact cassettes were mass-produced in the 1910s, it still able maintained the largest market share.
        </p>
        <p>
          Records industry experienced a major decline when CD (Compact Disc) was released in the early 80s, and it becomes the mainstream for the younger generation in the 90s.
        </p>
      </div>
    </>
  </InteriorPostLayout>
);