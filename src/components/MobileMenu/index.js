import { useRootContext } from "@/context/context";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";
import PropTypes from "prop-types";

const MobileMenu = ({ data }) => {
  const { social, logo, navItems } = data;
  const { toggleMenu, menuStatus } = useRootContext();

  return (
    <div className={classNames("mobile-nav__wrapper", "animated", "fadeInLeft", { expanded: menuStatus })}>
      <div onClick={() => toggleMenu()} className="mobile-nav__overlay mobile-nav__toggler"></div>
      <div className="mobile-nav__content">
        <span onClick={() => toggleMenu()} className="mobile-nav__close mobile-nav__toggler">
          <i className="fa fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/" aria-label="Visita San Carlos logo">
            <Image src={logo.src} width={155} alt={logo.alt} />
          </Link>
        </div>
        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            {navItems.map(({ id, ...item }) => (
              <NavItem key={id} item={item} />
            ))}
          </ul>
        </div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <a href="mailto:contacto@visitasancarlos.com.mx">contacto@visitasancarlos.com.mx</a>
          </li>
          <li>
            <i className="fa fa-phone-alt"></i>
            <a href="tel:622-123-4567">622 123 4567</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            {social.map(({ icon, link }, index) => (
              <a href={link} key={index} className={`fab ${icon}`}></a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  data: PropTypes.object,
};

export default MobileMenu;
