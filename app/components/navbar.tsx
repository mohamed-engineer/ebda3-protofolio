import React, { useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full py-4 bg-gray-900 text-white fixed top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">فريق إبداع</h1>

          {/* 🔹 زر القائمة في الهاتف */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden text-white focus:outline-none"
          >
            {isOpen ? (
              <span className="text-3xl">&#10005;</span>
            ) : (
              <span className="text-3xl">&#9776;</span>
            )}
          </button>

          {/* 🔹 القائمة الأساسية (كمبيوتر) */}
          <ul className="hidden md:flex gap-6">
            <li><a href="#home" className="hover:text-blue-400">الصفحة الرئيسية</a></li>
            <li><a href="#services" className="hover:text-blue-400">نبذة عنا</a></li>
            <li><a href="#projects" className="hover:text-blue-400">أعمالنا السابقة</a></li>
            <li><a href="#contact" className="hover:text-blue-400">تواصل معنا</a></li>
          </ul>
        </div>

        {/* 🔹 القائمة المنسدلة مع تأثير السقوط */}
        {isOpen && (
  <motion.ul
    initial={{ opacity: 0, y: -20 }}  
    animate={{ opacity: 1, y: 0 }}  
    exit={{ opacity: 0, y: -20 }}  
    transition={{ duration: 0.3, ease: "easeInOut" }}  
    className="md:hidden flex flex-col items-center gap-4 bg-gray-900 text-white py-6 w-full shadow-lg rounded-b-lg border-t border-gray-700"
  >
    <li className="w-full text-center py-3 hover:bg-gray-800 transition">
      <a href="#home" onClick={() => setIsOpen(false)}>الصفحة الرئيسية</a>
    </li>
    <li className="w-full text-center py-3 hover:bg-gray-800 transition">
      <a href="#services" onClick={() => setIsOpen(false)}>نبذة عنا</a>
    </li>
    <li className="w-full text-center py-3 hover:bg-gray-800 transition">
      <a href="#projects" onClick={() => setIsOpen(false)}>أعمالنا السابقة</a>
    </li>
    <li className="w-full text-center py-3 hover:bg-gray-800 transition">
      <a href="#contact" onClick={() => setIsOpen(false)}>تواصل معنا</a>
    </li>
  </motion.ul>
)}

      </nav>
    </>
  );
};
