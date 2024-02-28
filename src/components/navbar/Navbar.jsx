import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/*  Side Bar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          duration={{ duration: 0.5 }}
        >
          Filip Kłos
        </motion.span>
        <div className="social">
          <a href="">
            <img src="linkedin.png" alt="" />
          </a>
          <a href="">
            <img src="github-mark.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
