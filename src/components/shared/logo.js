import React from "react";
import { Link } from "gatsby";

export default ({logoColor, animated}) => {
  console.log(animated);
  return (
    <Link to={`/`} className={`logo ${animated ? 'logo--animated' : ''}`} style={{color: logoColor}}>
      <div className="logo__main">
        andri&apos;space
        <span>UI / UX / DEV</span>
      </div>
    </Link>
  )
}