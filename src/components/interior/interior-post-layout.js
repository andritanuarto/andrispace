import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../shared/header";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <div className="interior-page">
      <Header/>
      <div className="interior-page__content">
        <h3>
          {data.site.siteMetadata.title}
        </h3>
      </div>
      {children}
    </div>
  )
}