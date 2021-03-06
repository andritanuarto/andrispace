import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Moment from 'moment';
import Fade from 'react-reveal/Fade';
import Header from '../components/shared/header';
import InteriorContainer from '../components/shared/interior-container';

const CaseStudies = () => {
  const data = useStaticQuery(graphql`
    query CaseStudyQuery {
      allJavascriptFrontmatter(sort: {fields: frontmatter___projectDate, order: DESC}, filter: {frontmatter: {status: {eq: "published"}}}) {
        edges {
          node {
            frontmatter {
              blurb
              postTitle
              projectDate
              url
              summary
              heroImg {
                childImageSharp {
                  resize(width: 500) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const caseStudies = data.allJavascriptFrontmatter.edges;


  return (
    <>
      <Header/>
      <InteriorContainer>
        <div className="interior-page__content">
          <div className="interior-page__heading">
            <h1>Case Studies</h1>
          </div>
          <div className="par par--wide-width thumbnail-view">
            {
              caseStudies.map((caseStudy) => {
                const frontmatter = caseStudy.node.frontmatter;
                return (
                  <Link to={frontmatter.url} className="thumbnail-view__thumbnail" key={frontmatter.postTitle}>
                    <Fade>
                      <div
                        className="thumbnail-view__thumbnail__img"
                        style={{backgroundImage: `url(${frontmatter.heroImg.childImageSharp.resize.src})`}}/>
                      <span>{Moment(frontmatter.projectDate).format('ll')}</span>
                      <strong>{frontmatter.postTitle}</strong>
                      <div className="thumbnail-view__thumbnail__blurb">
                        {frontmatter.summary} ...
                      </div>
                      <button className="btn">read more</button>
                    </Fade>
                  </Link>
                );
              })
            }
          </div>
        </div>
        </InteriorContainer>
      </>
  );
}

export default CaseStudies;