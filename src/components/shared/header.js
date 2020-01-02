import React from "react";
import { connect } from 'react-redux';
import { Link } from "gatsby";
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

const menus = [
  {label: 'home', link: '/'},
  {label: 'case studies', link: '/case-studies'},
  {label: 'journals', link: '/journals'},
  {label: 'about', link: '/about'},
  {label: 'contact', link: '/contact'}
];

const Header = ({navColor, logoColor, navigationOpen, handleNavigation}) => {
  const mainMenu = (
    <div className="nav">
      {menus.map((menu) => {
        return (
          <Link onClick={() => {handleNavigation(!navigationOpen)}} to={menu.link}>
            {menu.label}
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      <div className="header header--dark">
        <Logo logoColor={logoColor}/>
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