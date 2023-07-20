import React from "react";
import ContactList from "@/components/ContactList";
import IFrameMap from "@/components/IFrameMap";

const DetailsLeft = ({ data }) => {
  const { description, featuredImage, } = data.content;
  const contact = data?.contact;

  return (
    <div className="tour-details-two__left">
      <div className="tour-details-two__overview">
        <img src={featuredImage?.sourceUrl} alt={featuredImage?.alt} />
        <h1 className="tour-details-two__title">{data.title}</h1>
        <div className="tour-details-two__text" dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
        <ContactList data={contact} />
        <IFrameMap lat={data?.lat} lng={data?.lng} />
    </div>
  );
};

export default DetailsLeft;
