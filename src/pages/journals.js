import React from 'react';
import Header from "../components/shared/header";
import { Link, graphql } from "gatsby";

const Journal = ({ data }) => {
  return (
    <div className="interior-page journals-page">
      <Header/>
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
            <div
              className="thumbnail-view__thumbnail__img"
              style={{backgroundImage: `url(${''})`}}/>
            <span>{node.frontmatter.date}</span>
            <strong>{node.frontmatter.title}</strong>
            <div className="thumbnail-view__thumbnail__blurb">
            {node.excerpt}
            </div>
          </Link>

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