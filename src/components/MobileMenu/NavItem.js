import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import SubNavItem from "./SubNavItem";
import PropTypes from "prop-types";

const NavItem = ({ item = {} }) => {
  const { pathname } = useRouter();

  const [expand, setExpand] = useState(false);

  const handleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpand((preExpand) => !preExpand);
  };

  const { name, href, subNavItems } = item;

  return (
    <li className={classNames("dropdown", {"current": pathname === href})}>
      <Link href={href}>
        <a className={expand ? " expanded" : ""}>
          {name}
          <button
            onClick={handleExpand}
            aria-label="dropdown toggler"
            className={classNames({ "expanded": expand })}
          >
            <i className="fa fa-angle-down"></i>
          </button>
        </a>
      </Link>
      <ul
        style={{
          display: expand ? "block" : "none",
        }}
      >
        {subNavItems.map((subItem) => (
          <SubNavItem subItem={subItem} key={subItem.id} />
        ))}
      </ul>
    </li>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
};

export default NavItem;
