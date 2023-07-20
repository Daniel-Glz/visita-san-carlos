import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CategoryFilter = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([
    { name: "Categoría 1", slug: "categoria-1" },
    { name: "Categoría 2", slug: "categoria-2" },
  ]);

  return (
    <div className="searcher">
      <div className="searcher__btn-container">
        <button className="searcher__btn thm-btn">
          <span>Buscar por categoria </span>
          <i className="fa fa-angle-down"></i>
        </button>
      </div>
      <div className={classNames("searcher__categories-container", { "sr-only": isOpen })}>
        <div className="searcher__box">
          <form className="searcher__form">
            {
              categories?.forEach(({ name, slug }) => {
                <div className="searcher__form-group">
                  <input type="checkbox" name={`category__${slug}`} id={slug} />
                  <label htmlFor={`category__${slug}`}>{name}</label>
                </div>
              })
            }
          </form>
        </div>
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  data: PropTypes.object
};

export default CategoryFilter;
