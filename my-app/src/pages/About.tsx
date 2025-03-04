import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity:1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
    className="p-6"
    >
      <h1 className="text-2xl font-bold">アバウトページ</h1>
    </motion.div>
  );
};