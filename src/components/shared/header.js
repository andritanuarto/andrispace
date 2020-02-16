import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from "gatsby";
import Logo from "./logo";
import Hamburger from "./hamburger";
import { handleNavigation, handleInitialRenderStatus } from '../../actions/ui';

const mapDispatchToProps = (dispatch) => {
  return {
    handleNavigation: (openOrClose) => {
      dispatch(handleNavigation(openOrClose));
    },
    handleInitialRenderStatus: (status) => {
      dispatch(handleInitialRenderStatus(status));
    }
  };
}

const mapStateToProps = ({ navigationOpen, initialRender }) => {
  return {
    navigationOpen,
    initialRender
  };
};

const menus = [
  {label: 'home', link: '/'},
  {label: 'about', link: '/about'},
  {label: 'case studies', link: '/case-studies'},
  {label: 'journals', link: '/journals'},
  {label: 'contact', link: '/contact'}
];

const Header = ({navColor, logoColor, navigationOpen, initialRender, handleNavigation, handleInitialRenderStatus}) => {
  useEffect(() => {
    setTimeout(() => {
      handleInitialRenderStatus(false);
    }, 4000);
  });

  const mainMenu = (
    <div className="nav">
      {menus.map((menu) => {
        return (
          <Link key={menu.label} onClick={() => {handleNavigation(!navigationOpen)}} to={menu.link}>
            {menu.label}
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      <div className="header header--light">
        <Logo logoColor={logoColor} animated={true && initialRender}/>
        <Hamburger
          navColor={navColor}
          navigationOpen={navigationOpen}
          handleNavigation={handleNavigation}
        />
      </div>
      {navigationOpen && mainMenu}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);