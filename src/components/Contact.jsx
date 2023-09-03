import React from "react";
import "../Styles/Contact.css";
import ContactHeader from "./ContactHeader";
import ContactDetails from "./ContactDetails";

const Contact = () => {
  return (
    <section className="contacts" id="contacts">
      <ContactHeader />
      <ContactDetails />
    </section>
  );
};

export default Contact;
