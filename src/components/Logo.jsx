import "../Styles/Logo.css";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation } from "../Assets/motion";

const Logo = () => {
  return (
    <AnimatePresence>
      <motion.article {...slideAnimation("left")} className="logo">
        <h1 className="logo-initials">PMW</h1>
        <h2 className="logo-head">Portfolio</h2>
      </motion.article>
    </AnimatePresence>
  );
};

export default Logo;
