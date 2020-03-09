import React from "react";
import { Link } from "gatsby";
import PropTypes from 'prop-types';

const Logo = ({logoColor, animated}) => {
  return (
    <Link data-test="logo" to={`/`} className={`logo ${animated ? 'logo--animated' : ''}`} style={{color: logoColor}}>
      <div className="logo__main">
        andri&apos;space
        <span>UI / UX / DEV</span>
      </div>
    </Link>
  )
}

Logo.propTypes = {
  logoColor: PropTypes.string,
  animated: PropTypes.bool.isRequired
};

Logo.defaultProps = {
  logoColor: '#ffffff'
}

export default Logo;