import React from "react";
import { Link } from "gatsby";

export default ({logoColor}) => {
  return (
    <Link to={`/`} className="logo" style={{color: logoColor}}>
      <div className="logo__main">
        andri&apos;space
        <span>UI / UX / DEV</span>
      </div>
    </Link>
  )
}