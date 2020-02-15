import React from 'react';
import Header from "../components/shared/header";
import { Link, graphql } from "gatsby";

const Journal = ({ data }) => {
  return (
    <div className="interior-page">
      <Header/>
      <div className="interior-page__content">
        <div className="interior-page__heading">
          <h1>
            Journals
          </h1>
        </div>
      </div>
      <div className="par par--normal-width">
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} >
              <h3>
                {node.frontmatter.title}{" "} — {node.frontmatter.date}
              </h3>s
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
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