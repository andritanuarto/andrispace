import React from "react"
import { graphql } from "gatsby"
import InteriorPostLayout from '../components/interior/interior-post-layout';

export default ({ data }) => {
  const content = data.markdownRemark.html;
  const frontmatter = data.markdownRemark.frontmatter;

  return (
    <InteriorPostLayout
      caseStudyContent={{
        postTitle: frontmatter.title,
        projectDate: frontmatter.date,
      }}
    >
      <div className="par par--normal-width" dangerouslySetInnerHTML={{ __html: content }} />
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