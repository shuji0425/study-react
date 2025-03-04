import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: -50 }} // 初期状態：左からスライド
    animate={{ opacity: 1, x: 0 }} // 表示時：通常位置
    exit={{ opacity: 0, x: 50 }} // ページ遷移時：右へスライドアウト
    transition={{ duration: 0.5 }}
    className="p-6"
    >
      <h1 className="text-2xl font-bold">ホームページ</h1>
    </motion.div>
  );
};