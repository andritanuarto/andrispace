import React from "react";
import InteriorPostLayout from "../../components/interior/interior-post-layout";
import caseStudyBanner from '../../img/vinyl-fanatics/case-study-banner.jpeg';

export const frontmatter = {
  clientName: 'Vinyl Fanatics',
  projectDate: '2019-05-15',
  status: 'published',
  projectTitle: 'Vinyl Fanatics – An online store for vinyl collectors',
  postTitle: 'An online store for vinyl collectors',
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
          Before mp3, cd or even cassette, the vinyl records industry enjoyed its renaissance among music lovers. It was the primary medium for music reproduction in the 20th century. Although the industry faced stiff competition when the compact cassettes were mass-produced in the 1910s, it still able maintained the largest market share. By the early 90s, the CD became the most preferred medium for people to collect music. As CD continued to grow, it contributed to a major decline in vinyl sales.
        </p>
        <p>
          After declining market in the 90s to early 2000s, vinyl records experienced a resurgence in 2008. Its sales reached 1.9 million units, and the increasing trend continues and eventually outsell CDs in 2019 for the first time in 40 years. Today vinyl records established its niche besides the popularity of online music platforms. It attracted not only older generations, but more millennials started to enjoy vinyl records as an alternative way to enjoy music.
        </p>
        <p>
          <h2>Project Brief</h2>
          Started as a small store in Singapore, they wanted to sell their products beyond the local market through the e-commerce website. The new website aims to attract more buyers and becoming more relevant for the increasing number of younger audiences to enjoy music using vinyl records. Their website will be developed using Shopify and targeting for both mobile and desktop users.
        </p>
        <p>
          <h3>The Challenge</h3>
          A lot of people enjoy going to the physical store and do crate surfing to buy vinyl, but not everyone has the access and time to go to the physical store. The challenge is how to create a pleasant experience for users to browse and purchase vinyl online and attracting younger audiences.
        </p>
      </div>
      <div className="par par--normal-width">
        <h2>Research</h2>
        <p>As a starting point, we did some research to gain a better understanding of vinyl records and the music markets in general. We conducted domain research, user interviews, and surveys to get the data about users' behaviour, needs, pain-points and opportunities.</p>
      </div>
    </>
  </InteriorPostLayout>
);