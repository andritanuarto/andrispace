import React from "react";
import { Link } from "gatsby";

export default () => {
  return (
    <Link to={`/`} className="logo">
      <div className="logo__main">
        andri&apos;space
      </div>
      <div className="logo__tag">UI/UX</div>
    </Link>
  )
}