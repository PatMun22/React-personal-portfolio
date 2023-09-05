import React, { useRef, useState } from "react";
import "../Styles/Form.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(e.target);
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
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        value={data}
        onChange={handleChange}
        placeholder="your full name"
        required
      />
      <input
        type="email"
        name="email"
        value={data}
        onChange={handleChange}
        placeholder="your email address"
        required
      />
      <textarea
        name="message"
        id="textarea-message"
        rows="10"
        value={data}
        onChange={handleChange}
        placeholder="Enter your message..."
        required
      ></textarea>
      <button type="submit" className="submit-form">
        Send Message
      </button>
    </form>
  );
};

export default Form;
