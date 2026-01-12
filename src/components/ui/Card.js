import { motion } from "framer-motion";

export default function Card({ children, className = "", ...props }) {
  return (
    <motion.div 
      className={`bg-white rounded-2xl shadow-md p-6 border border-gray-100 ${className}`}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
