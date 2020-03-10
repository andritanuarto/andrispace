import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from "gatsby";
import Logo from "./logo";
import Hamburger from "./hamburger";
import { handleNavigation, handleInitialRenderStatus } from '../../actions/ui';
import instagram from '../../img/instagram.svg';
import twitter from '../../img/twitter.svg';
import github from '../../img/github-cat.svg';
import linkedin from '../../img/linkedin.svg';
import SVG from 'react-inlinesvg';

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
        console.log(menu.label);
        return (
          <div>
            <Link key={menu.label} onClick={() => {handleNavigation(!navigationOpen)}} to={menu.link}>
              {menu.label}
            </Link>
          </div>
        );
      })}
      <ul className="nav__social-media-links">
        <li><a target="_blank" href="https://www.linkedin.com/in/andritanuarto/"><SVG src={linkedin} /></a></li>
        <li><a target="_blank" href="https://github.com/andritanuarto"><SVG src={github} /></a></li>
        <li><a target="_blank" href="https://twitter.com/andritanuarto" href="#"><SVG src={twitter} /></a></li>
        <li><a target="_blank" href="http://instagram.com/andritanuarto"><SVG src={instagram} /></a></li>
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