import React from "react";

const WhyChoose = ({ data }) => {
  const { bg, bg2, tagline, title, description, lists } = data;

  return (
    <section className="why-choose">
      <div className="why-choose__container">
        <div className="why-choose__left">
          <div
            className="why-choose__left-bg"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        </div>
        <div className="why-choose__right">
          <div
            className="why-choose__right-map"
            style={{ backgroundImage: `url(${bg2})` }}
          ></div>
          <div className="why-choose__right-content">
            <div className="section-title text-left">
              <span className="section-title__tagline">{tagline}</span>
              <h2 className="section-title__title">{title}</h2>
            </div>
            <p className="why-choose__right-text">{description}</p>
            <ul className="list-unstyled why-choose__list">
              {lists.map((list) => (
                <li key={list.id}>
                  <div className="icon">
                    <span className={list.icon}></span>
                  </div>
                  <div className="text">
                    <h4>{list.title}</h4>
                    <p>{list.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
