import React from "react";
import { connect } from 'react-redux';
import Logo from "./logo";
import Hamburger from "./hamburger";
import { handleNavigation } from '../../actions/ui';

const mapDispatchToProps = (dispatch) => {
  return {
    handleNavigation: (openOrClose) => {
      dispatch(handleNavigation(openOrClose));
    }
  };
}

const mapStateToProps = ({ navigationOpen }) => {
  return {
    navigationOpen
  };
};

const Header = ({navColor, logoColor, navigationOpen, handleNavigation}) => {
  return (
    <div className="header header--dark">
      <Logo logoColor={logoColor}/>
      <Hamburger
        navColor={navColor}
        navigationOpen={navigationOpen}
        handleNavigation={handleNavigation}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);