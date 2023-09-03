import React from "react";
import "../Styles/FooterBottom.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <article className="footer-bottom">
      <h3>
        Copyright
        <span>
          <AiOutlineCopyrightCircle className="copyright" />
        </span>
        2023. All Rights Reserved. WaphWebs
      </h3>
    </article>
  );
};

export default FooterBottom;
