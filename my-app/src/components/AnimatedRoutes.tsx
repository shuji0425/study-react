import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { AnimatePresence } from "framer-motion";
import { Test } from "../pages/Test";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </AnimatePresence>
  )
}