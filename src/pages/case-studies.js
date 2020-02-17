import React from 'react';
import Header from "../components/shared/header";
import { useStaticQuery, graphql, Link } from "gatsby";

const CaseStudies = () => {
  const data = useStaticQuery(graphql`
    query CaseStudyQuery {
      allJavascriptFrontmatter {
        edges {
          node {
            frontmatter {
              blurb
              postTitle
              projectDate
              url
              summary
              heroImg {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  const caseStudies = data.allJavascriptFrontmatter.edges;


  return (
    <div className="interior-page">
      <Header/>
      <div className="interior-page__content">
        <div className="interior-page__heading"><h1>Case Studies</h1></div>
        <div className="par par--wide-width thumbnail-view">
          {
            caseStudies.map((caseStudy) => {
              const frontmatter = caseStudy.node.frontmatter;
              return (
                <Link to={frontmatter.url} className="thumbnail-view__thumbnail" key={frontmatter.postTitle}>
                  <div
                    className="thumbnail-view__thumbnail__img"
                    style={{background: `url(${frontmatter.heroImg.publicURL})`}}/>
                  <span>{frontmatter.projectDate}</span>
                  <strong>{frontmatter.postTitle}</strong>
                  <div className="thumbnail-view__thumbnail__blurb">
                    {frontmatter.summary} ...
                  </div>
                  <button className="btn">read more</button>
                </Link>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;