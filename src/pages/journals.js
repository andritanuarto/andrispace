import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from "../components/shared/header";
import InteriorContainer from '../components/shared/interior-container';
import { Link, graphql } from "gatsby";

const Journal = ({ data }) => {
  console.log(data.allMarkdownRemark.edges[0].node.frontmatter.image.childImageSharp.fluid.src)
  return (
    <>
      <Header/>
      <InteriorContainer additionalClass="journal-page">
        <div className="interior-page__content">
          <div className="interior-page__heading">
            <h1>Journals</h1>
          </div>
        </div>
        <div className="par par--wide-width thumbnail-view">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link
              key={node.id}
              to={node.fields.slug} className="thumbnail-view__thumbnail"
            >
              <Fade>
                <div
                  className="thumbnail-view__thumbnail__img"
                  style={{backgroundImage: `url(${node.frontmatter.image.childImageSharp.fluid.src})`}}>
                </div>
                <span>{node.frontmatter.date}</span>
                <strong>{node.frontmatter.title}</strong>
                <div className="thumbnail-view__thumbnail__blurb">
                {node.excerpt}
                </div>
              </Fade>
            </Link>
          ))}
        </div>
      </InteriorContainer>
    </>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Journal;