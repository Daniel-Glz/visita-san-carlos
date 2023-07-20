import { Container, Image } from "react-bootstrap";
import { useRootContext } from "@/context/context";
import classNames from "classnames";
import Link from "next/link";
import NavItem from "./NavItem";
import PropTypes from "prop-types";
import React from "react";
import useScroll from "@/hooks/useScroll";

const Header = ({ isHome, data }) => {
  const scrollTop = useScroll(130);
  const { icons, cta, logo, logo2, navItems } = data;
  const { toggleMenu, toggleSearch } = useRootContext();

  return (
    <header className={classNames("main-header", "clearfix", { "main-header-two": !isHome })}>
      <div className="main-header__top">
        <Container>
          <div className="main-header__top-inner clearfix">
            <div className="main-header__top-left">
              <ul className="list-unstyled main-header__top-address">
                {icons.map(({ id, icon, content, subHref }) => (
                  <li key={id}>
                    <div className="icon">
                      <span className={icon}></span>
                    </div>
                    <div className="text">
                      <a href={`${subHref}:${content}`}>{content}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="main-header__top-right">
              <div className="main-header__top-right-inner">
                <div className="main-header__top-right-btn-box">
                  <Link className="thm-btn main-header__top-right-btn" href={cta.href}>
                    {cta.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <nav
        className={
          classNames(
            "main-menu",
            { "stricky-header stricked-menu main-menu stricky-fixed slideInDown animated clearfix": scrollTop },
            { "main-menu-two": !isHome },
            { "slideIn animated clearfix": !scrollTop }
          )
        }
      >
        <div
          className={
            classNames(
              { "sticky-header__content main-menu-wrapper clearfix": scrollTop },
              { "main-menu-wrapper clearfix": !scrollTop }
            )
          }
        >
          <Container className="clearfix">
            <div className="main-menu-wrapper-inner clearfix">
              <div className="main-menu-wrapper__left">
                <div className="main-menu-wrapper__logo">
                  <Link href="/" aria-label="Imagen de logo">
                    <Image
                      src={isHome ? logo2.src : logo.src}
                      alt={isHome ? logo2.alt : logo.src}
                    />
                  </Link>
                </div>
                <div className="main-menu-wrapper__main-menu">
                  <span
                    onClick={() => toggleMenu()}
                    className="mobile-nav__toggler"
                  >
                    <i className="fa fa-bars"></i>
                  </span>
                  <ul className="main-menu__list">
                    {navItems.map((navItem) => (
                      <NavItem key={navItem.id} navItem={navItem} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  isHome: PropTypes.bool,
};

export default Header;
