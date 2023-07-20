import React from "react";
import Image from "next/image";

const TestimonialItem = ({ testimonial }) => {
  const {
    image,
    description,
    review,
    client: { name, role },
  } = testimonial;

  return (
    <div>
      <div style={{ userSelect: "none" }} className="testimonial-one__single">
        <div className="testimonail-one__content">
          <p className="testimonial-one__text">{description}</p>
          <div className="testimonial-one__client-info">
            <h3 className="testimonial-one__client-name">{name}</h3>
            <p className="testimonial-one__client-title">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
