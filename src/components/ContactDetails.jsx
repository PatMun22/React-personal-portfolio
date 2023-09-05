import React from "react";
import "../Styles/ContactDetails.css";
import ContacLeft from "./ContacLeft";
import ContactRight from "./ContactRight";

const ContactDetails = () => {
  return (
    <article className="contact-details">
      <ContacLeft />
      <ContactRight />
    </article>
  );
};

export default ContactDetails;
