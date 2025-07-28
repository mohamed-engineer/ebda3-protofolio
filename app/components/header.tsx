import React from 'react'
import { useRef } from 'react';
import TypeIt from "typeit-react";
export const Header = () => {
 const sectionRef = useRef<HTMLDivElement | null>(null); 
      
        const scrollToSection = () => {
          if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
          }
        };
    
  return (
<section id='home' className="h-screen flex flex-col justify-center items-center text-center bg-gray-800 text-white">
      <h1 className="text-4xl font-bold"><TypeIt>مرحباً, نحن فريق ابداع</TypeIt></h1>
      <p className="text-lg mt-4">نحن متخصصون في تصميم الويب و التسويق الرقمي</p>
      <a href="#services"   onClick={scrollToSection}  className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-full">من نكون؟</a>
    </section>  
    )
}
