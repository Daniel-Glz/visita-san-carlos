import React from "react";

const DetailsLeft = ({ data }) => {
  const { description, featuredImage } = data.content;
  return (
    <div className="tour-details-two__left">
      <div className="tour-details-two__overview">
        <img src={featuredImage?.sourceUrl} alt="" />
        <h1 className="tour-details-two__title">{data.title}</h1>
        <div className="tour-details-two__text" dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
      <div className="tour-details-two__overview">
        <h3 className="tour-details-two__title">Informacion de contacto</h3>
        <ul className="list-unstyled destinations-details__overview-list">
          {
            data.contact && data.contact.name && (
              <li>
                <div className="destinations-details__overview-left">
                  <h6 className="destinations-details__overview-title">Nombre</h6>
                </div>
                <div className="destinations-details__overview-right">
                  <p className="destinations-details__overview-text">{data.contact.name}</p>
                </div>
              </li>
            )
          }
          {
            data.contact && data.contact.tel && (
              <li>
                <div className="destinations-details__overview-left">
                  <h6 className="destinations-details__overview-title">Telefono</h6>
                </div>
                <div className="destinations-details__overview-right">
                  <p className="destinations-details__overview-text">{data.contact.tel}</p>
                </div>
              </li>
            )
          }
          {
            data.contact && data.contact.email && (
              <li>
                <div className="destinations-details__overview-left">
                  <h6 className="destinations-details__overview-title">Correo electronico</h6>
                </div>
                <div className="destinations-details__overview-right">
                  <p className="destinations-details__overview-text">{data.contact.email}</p>
                </div>
              </li>
            )
          }
          {
            data.contact && data.contact.website && (
              <li>
                <div className="destinations-details__overview-left">
                  <h6 className="destinations-details__overview-title">Sitio web</h6>
                </div>
                <div className="destinations-details__overview-right">
                  <p className="destinations-details__overview-text">{data.contact.website}</p>
                </div>
              </li>
            )
          }
          {
            data.contact && data.contact.facebook && (
              <li>
                <div className="destinations-details__overview-left">
                  <h6 className="destinations-details__overview-title">Facebook</h6>
                </div>
                <div className="destinations-details__overview-right">
                  <p className="destinations-details__overview-text">{data.contact.facebook}</p>
                </div>
              </li>
            )
          }
          {
            data.contact && data.contact.instagram && (
              <li>
                <div className="destinations-details__overview-left">
                  <h6 className="destinations-details__overview-title">Instagram</h6>
                </div>
                <div className="destinations-details__overview-right">
                  <p className="destinations-details__overview-text">{data.contact.instagram}</p>
                </div>
              </li>
            )
          }
        </ul>
      </div>
      <div className="tour-details-two__location">
        <h3 className="tour-details-two__title">Ubicacion de evento</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="tour-details-two__location-map"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DetailsLeft;
