import React from "react";
import { Image } from "react-bootstrap";
import PropTypes from "prop-types";

const Preloader = ({ loading }) => {
  return (
    <div
      style={{ opacity: loading ? 1 : 0, zIndex: loading ? 9999 : -1 }}
      className="preloader"
    >
      <Image className="preloader__image" width={60} src={"a"} alt="" />
    </div>
  );
};

Preloader.propTypes = {
  loading: PropTypes.bool,
};

export default Preloader;
