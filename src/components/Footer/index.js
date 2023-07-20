import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Image, Row } from "react-bootstrap";

const Footer = ({ data }) => {
  const { about, author, companies, explore, icons, logo } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <Container>
          <div className="site-footer__top-inner">
            <Row>
              <Col xl={4} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__about-logo">
                    <Link href="/" aria-label="Imagen de logo">
                      <Image src={logo.src} alt={logo.alt} />
                    </Link>
                  </div>
                  <p className="footer-widget__about-text">{about}</p>
                  <ul className="footer-widget__about-contact list-unstyled">
                    {icons.map(({ id, icon, content, subHref }) => (
                      <li key={id}>
                        <div className="icon">
                          <i className={icon}></i>
                        </div>
                        <div className="text">
                          {subHref ? (
                            <a href={`${subHref}:${content}`}>{content}</a>
                          ) : (
                            <p>{content}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col xl={2} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__company clearfix">
                  <h3 className="footer-widget__title">Te podria interesar</h3>
                  <ul className="footer-widget__company-list list-unstyled">
                    {companies.map(({ id, link, title }) => (
                      <li key={id}>
                        <Link href={link}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col xl={2} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__explore">
                  <h3 className="footer-widget__title">Ultimos articulos</h3>
                  <ul className="list-unstyled footer-widget__explore-list">
                    {explore.map(({ id, title, link }) => (
                      <li key={id}>
                        <a href={link}>{title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col xl={4} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__newsletter">
                  <h3 className="footer-widget__title">Newsletter</h3>
                  <form
                    className="footer-widget__newsletter-form mc-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="footer-widget__newsletter-input-box">
                      <input
                        type="email"
                        placeholder="Correo Electronico"
                        name="email"
                        required
                      />
                      <button
                        type="submit"
                        className="footer-widget__newsletter-btn"
                      >
                        Subscribete
                      </button>
                    </div>
                  </form>
                  <div className="mc-form__response text-center"></div>
                  <div className="footer-widget__newsletter-bottom">
                    <div className="footer-widget__newsletter-bottom-icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="footer-widget__newsletter-bottom-text">
                      <p>Estoy de acuerdo con los terminos y politicas</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="site-footer__bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="site-footer__bottom-inner">
                <div className="site-footer__bottom-left">
                </div>
                <div className="site-footer__bottom-right">
                  <p>
                    Todos los derechos reservados {new Date().getFullYear()}, <a href="#">{author}</a>
                  </p>
                </div>
                <div className="site-footer__bottom-left-arrow">
                  <a href="#" className="scroll-to-target scroll-to-top" aria-label="Volver hacia arriba">
                    <span className="icon-right-arrow"></span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  data: PropTypes.object,
};

export default Footer;
