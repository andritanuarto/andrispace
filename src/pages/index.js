import React, {Fragment} from "react";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import { Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import Splash from "../components/home/splash";

import PlanSwift from "../components/home/custom-splash/planswift/planswift";
import PlanSwiftLogo from "../components/home/custom-splash/planswift/planswift-logo.png";
import WorldRevolutionLogo from "../components/home/custom-splash/world-revolution/world-revolution-logo.png";

const mapStateToProps = ({ splashIndex }) => {
  return {
    splashIndex
  };
};

const Index = (props) => {
  const { data, splashIndex } = props;
  const splashes = [
    {
      clientLogo: PlanSwiftLogo,
      contentComponent: <PlanSwift/>,
      backgroundColor: '#090421'
    },
    {
      clientLogo: WorldRevolutionLogo,
      contentComponent: <div>World Revolution</div>
    },
  ];

  return (
    <Fragment>
      <Splash
        navColor={splashes[splashIndex].navColor}
        logoColor={splashes[splashIndex].logoColor}
        backgroundColor={splashes[splashIndex].backgroundColor}
        clientLogo={splashes[splashIndex].clientLogo}
        textColor={splashes[splashIndex].textColor}
        slideNavColor={splashes[splashIndex].slideNavColor}
        slideLength={splashes.length}
        activeSlideIndex={splashIndex}
      >
        {splashes[splashIndex].contentComponent}
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
    </Fragment>
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