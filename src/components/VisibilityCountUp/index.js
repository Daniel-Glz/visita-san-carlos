import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import PropTypes from "prop-types";

const VisibilityCountUp = ({ count }) => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <VisibilitySensor
      offset={{ top: 10 }}
      delayedCall={true}
      onChange={onVisibilityChange}
    >
      <CountUp start={0} end={countStart ? count : 0} duration={2} />
    </VisibilitySensor>
  );
};

VisibilityCountUp.propTypes = {
  count: PropTypes.string,
};

export default VisibilityCountUp;
