import Link from "next/link";
import { motion } from "framer-motion";

export default function Button({ 
  children, 
  href, 
  variant = "primary", 
  fullWidth = false,
  className = "",
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md";
  
  const variants = {
    primary: "bg-honey-yellow text-forest-brown hover:bg-yellow-400 hover:shadow-lg",
    secondary: "bg-forest-brown text-cream-bg hover:bg-brown-800 hover:shadow-lg",
    outline: "border-2 border-forest-brown text-forest-brown hover:bg-forest-brown hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClassName = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <motion.div 
          className={combinedClassName}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button 
      className={combinedClassName}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
