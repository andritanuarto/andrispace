import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import Logo from './logo';
import Hamburger from './hamburger';
import { handleNavigation, handleInitialRenderStatus } from '../../actions/ui';
import instagram from '../../img/instagram.svg';
import twitter from '../../img/twitter.svg';
import github from '../../img/github-cat.svg';
import linkedin from '../../img/linkedin.svg';
import SVG from 'react-inlinesvg';

export const mapDispatchToProps = (dispatch) => {
  return {
    handleNavigation: (openOrClose) => {
      dispatch(handleNavigation(openOrClose));
    },
    handleInitialRenderStatus: (status) => {
      dispatch(handleInitialRenderStatus(status));
    }
  };
};

export const mapStateToProps = ({ navigationOpen, initialRender }) => {
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

export const Header = ({
  navColor,
  logoColor,
  navigationOpen,
  initialRender,
  handleNavigation,
  handleInitialRenderStatus
}) => {
  useEffect(() => {
    setTimeout(() => {
      handleInitialRenderStatus(false);
    }, 4000);
  });

  const mainMenu = (
    <div className="nav">
      {menus.map((menu) => {
        return (
          <div key={menu.label} data-test="nav-menu">
            <Link
              data-test={`nav-menu-${menu.label}`}
              key={menu.label}
              onClick={() => {handleNavigation(!navigationOpen)}}
              to={menu.link}>
              {menu.label}
            </Link>
          </div>
        );
      })}
      <ul className="nav__social-media-links">
        <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/andritanuarto/"><SVG src={linkedin} /></a></li>
        <li><a target="_blank" rel="noreferrer" href="https://github.com/andritanuarto"><SVG src={github} /></a></li>
        <li><a target="_blank" rel="noreferrer" href="https://twitter.com/andritanuarto"><SVG src={twitter} /></a></li>
        <li><a target="_blank" rel="noreferrer" href="http://instagram.com/andritanuarto"><SVG src={instagram} /></a></li>
      </ul>
    </div>
  );

  return (
    <>
      <div data-test="header" className="header header--light">
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