import { motion } from "framer-motion";

const Layout = ({ children }) => (
//     <motion.div
//     initial={{ y: 100, opacity: 0 }}
//     animate={{ y: 0, opacity: 1 }}
//     exit={{ opacity: 0 }}
//     transition={{ duration: 1 }}
//   >
//     {children}
//   </motion.div>
  <motion.div
    initial={{ y: 150, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 150, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 150,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
);

export default Layout;