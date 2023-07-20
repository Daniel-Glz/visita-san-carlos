import React from "react";
import Image from "next/image";
import ContactList from "@/components/ContactList";
import IFrameMap from "@/components/IFrameMap";

const DetailsLeft = ({ data }) => {
  if (!data) return null;
  const { description, featuredImage, location } = data.content;
  const { contact } = data;
  return (
    <div className="tour-details-two__left">
      <div className="tour-details-two__overview">
        <h1 className="tour-details-two__title">{data.title}</h1>
        <Image src={featuredImage?.sourceUrl} alt={featuredImage?.alt} width={700} height={400} />
        <div className="tour-details-two__text" dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
        <ContactList data={contact} />
        <IFrameMap lat={location?.latitude} lng={location?.longitude} />
    </div>
  );
};

export default DetailsLeft;
