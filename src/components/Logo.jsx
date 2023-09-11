import { useEffect, useRef } from "react";
import "../Styles/Logo.css";
import { useAnimation, useInView, motion } from "framer-motion";

const Logo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("reveal");
    }
  }, [isInView]);
  return (
    <motion.article
      ref={ref}
      className="logo"
      variants={{
        hidden: { opacity: 0, x: "-100px" },
        reveal: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, bounce: 0.5, type: "spring" }}
    >
      <h1 className="logo-initials">PMW</h1>
      <h2 className="logo-head">Portfolio</h2>
    </motion.article>
  );
};

export default Logo;
