import HeaderLinks from "./HeaderLinks";
import TopBar from "./TopBar";
import HeaderInfo from "./headerInfo";
import { motion } from "framer-motion";
import "./navbar.css";

export default function NavBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-700 dark:bg-slate-600"
    >
      <div className="container m-auto py-4">
        <TopBar />
        <HeaderInfo />
        <HeaderLinks />
      </div>
    </motion.div>
  );
}
