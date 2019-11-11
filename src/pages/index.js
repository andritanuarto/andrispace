import React from "react";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import { Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import Splash from "../components/home/splash";

// Clients
import PlanSwift from "../components/home/custom-splash/planswift/planswift";
import PlanSwiftLogo from "../components/home/custom-splash/planswift/planswift-logo.png";

const mapStateToProps = ({ count }) => {
  return {
    count
  }
}

const Index = (props) => {
  const { data } = props;

  return (
    <>
      <Splash
        navColor={'light'}
        backgroundColor={'#000000'}
        clientLogo={PlanSwiftLogo}
      >
        <PlanSwift/>
      </Splash>
      <Layout>
        <div>
          <h1
            css={css`
              display: inline-block;
              border-bottom: 1px solid;
            `}
          >
            Amazing Pandas Eating Things
          </h1>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.fields.slug}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <h3
                  css={css`
                    margin-bottom: ${rhythm(1 / 4)};
                  `}
                >
                  {node.frontmatter.title}{" "}
                  <span
                    css={css`
                      color: #bbb;
                    `}
                  >
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

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

export default connect(mapStateToProps)(Index);