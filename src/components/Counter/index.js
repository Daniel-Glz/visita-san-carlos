import React from "react";
import VisibilityCountUp from "../VisibilityCountUp";
import PropTypes from "prop-types";

const Counter = ({ data }) => {
  return (
    <div className="counter-one">
      <div className="counter-one__container">
        <ul className="list-unstyled counters-one__box">
          {(data && data.length) && data.map(({ title, count }, index) => (
            <li key={index} className="counter-one__single animated fadeInUp">
              <h3 className="odometer">
                <VisibilityCountUp count={count} />
              </h3>
              <p className="counter-one__text">{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Counter.propTypes = {
  data: PropTypes.object
};

export default Counter;
