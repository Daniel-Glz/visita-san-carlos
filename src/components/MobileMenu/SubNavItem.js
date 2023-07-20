import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import PropTypes from "prop-types";

const SubNavItem = ({ subItem = {} }) => {
  const [expand, setExpand] = useState(false);

  const handleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpand((preExpand) => !preExpand);
  };

  const { href, subItems, name } = subItem;

  return (
    <li>
      <Link href={href}>
        <a className={classNames({"expanded": expand && subItems?.length })}>
          {name}
          {subItems?.length && (
            <button
              onClick={handleExpand}
              aria-label="dropdown toggler"
              className={classNames({ "expanded": expand })}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          )}
        </a>
      </Link>
      <ul
        style={{
          display: expand ? "block" : "none",
        }}
      >
        {subItems?.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

SubNavItem.propTypes = {
  subItem: PropTypes.object,
};

export default SubNavItem;
