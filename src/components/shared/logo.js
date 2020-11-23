import React, { memo } from "react";
import { Link } from "gatsby";
import PropTypes from 'prop-types';

const Logo = ({logoColor, animated}) => {
  console.log('rerender');
  return (
    <Link
      data-test="logo" to={`/`}
      className={`logo ${animated ? 'logo--animated' : ''}`}
      style={{color: logoColor}}
    >
      <div className="logo__main">
        andri&rsquo;space
        <span>UI / UX / DEV</span>
      </div>
    </Link>
  )
}

Logo.propTypes = {
  logoColor: PropTypes.string,
  animated: PropTypes.bool
};

Logo.defaultProps = {
  logoColor: '#333333',
  animated: false
}

export default memo(Logo);