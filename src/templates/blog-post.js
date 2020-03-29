import React from "react";
import Moment from 'moment';
import { graphql } from "gatsby";
import InteriorPostLayout from '../components/interior/interior-post-layout';

export default ({ data }) => {
  const content = data.markdownRemark.html;
  const frontmatter = data.markdownRemark.frontmatter;

  return (
    <InteriorPostLayout
      caseStudyContent={{
        postTitle: frontmatter.title,
        projectDate: Moment(frontmatter.date).format('ll'),
      }}
    >
      <div className="par par--normal-width journal-content" dangerouslySetInnerHTML={{ __html: content }} />
    </InteriorPostLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`