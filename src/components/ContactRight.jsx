import React, { useRef, useState } from "react";
import "../Styles/ContactRight.css";
import emailjs from "@emailjs/browser";

const ContactRight = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const onNameChange = (e) => {
    setNameValue(e.target.nameValue);
  };

  const onEmailChange = (e) => {
    setEmailValue(e.target.emailValue);
  };

  const onTextareaChange = (e) => {
    setTextareaValue(e.target.textareaValue);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8w03d2v",
        "template_lmg8xl8",
        form.current,
        "zzbwKXgAMD_n3wcvf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <article className="contact-right">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          value={nameValue}
          onChange={onNameChange}
          placeholder="your full name"
          required
        />
        <input
          type="email"
          name="email"
          value={emailValue}
          onChange={onEmailChange}
          placeholder="your email address"
          required
        />
        <textarea
          name="message"
          id="textarea-message"
          rows="10"
          value={textareaValue}
          onChange={onTextareaChange}
          placeholder="Enter your message..."
          required
        ></textarea>
        <button type="submit" className="submit-form">
          Send Message
        </button>
      </form>
    </article>
  );
};

export default ContactRight;
