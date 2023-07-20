import React, { Fragment } from "react";
import { Image } from "react-bootstrap";

const {
  title,
  lists,
  discount: { image, percent, title: discountTitle },
} = {
  title: "Tambien te puede interesar",
  lists: [
    {
      id: 1,
      image: "destinations-details-1-1.jpg",
      price: 1200,
      title: "Bahia delfin, San Carlos",
      subtitle: "Lorem ipsum",
    },
    {
      id: 2,
      image: "destinations-details-1-2.jpg",
      price: 1200,
      title: "Lorem ipsum dolor",
      subtitle: "sit amet",
    },
    {
      id: 3,
      image: "destinations-details-1-3.jpg",
      price: 1200,
      title: "consectetur adipiscing",
      subtitle: "elit, sed do eiusmod",
    }
  ],
  discount: {
    image: {
      src: "",
    },
    percent: "20%",
    title: "Discount\nFor\nMembers",
  },
}

const DetailsRight = () => {
  return (
    <div className="destinations-details__right">
      <div className="tour-details-two__last-minute tour-details-two__last-minute-2">
        <h3 className="tour-details-two__sidebar-title">{title}</h3>
        <ul className="tour-details-two__last-minute-list list-unstyled">
          {lists.map(({ id, image, price, title, subtitle }) => (
            <li key={id}>
              <div className="tour-details-two__last-minute-image">
                <Image
                  src={image}
                  alt=""
                />
              </div>
              <div className="tour-details-two__last-minute-content">
                <h6>${price}</h6>
                <h5>{title}</h5>
                <p>{subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="destinations-details__discount">
        <Image src={image.src} alt="" />
        <div className="destinations-details__discount-content">
          <h2>{percent}</h2>
          <h4>
            {discountTitle.split("\n").map((t, i) => (
              <Fragment key={i}>
                <span>{t}</span> <br />
              </Fragment>
            ))}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DetailsRight;
