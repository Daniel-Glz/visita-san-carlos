import React from "react";
import PropTypes from "prop-types";

const IFrameMap = ({ lat, lng }) => {
  if (!lat || !lng) { return null; }

  return (
    <div className="tour-details-two__location">
      <h3 className="tour-details-two__title">Ubicacion de evento</h3>
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZDTHCfNPiPuRE-BscvH6NkHAfpi_tyZ4&q=${lat},${lng}`}
        className="tour-details-two__location-map"
        allowFullScreen
      />
    </div>
  );
};

IFrameMap.propTypes = {
  lat: PropTypes.string,
  lng: PropTypes.string,
};

export default IFrameMap;
