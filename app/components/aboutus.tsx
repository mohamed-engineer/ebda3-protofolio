import React from 'react'
import { useEffect,useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import RocketImg from "./startup.png"
import WebImg from './ux.png'
export const Aboutus = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);


     
        const sectionRef = useRef<HTMLDivElement | null>(null); 
      
        const scrollToSection = () => {
          if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
          }
        };
    

  return (
    <>
    <section id="services"  className="py-20 px-6 bg-gray-900 text-center">
    
    <h2 
    data-aos="fade-down"
    className="text-3xl font-bold mb-4 "
    >
        
    نبذة عنا
    </h2>
    <div ref={sectionRef} className="flex flex-wrap justify-center gap-6">
      <div  
      data-aos="fade-right" 
      className="p-6 bg-gray-200 rounded-lg w-80  "
      >
        <div className="flex justify-center">
       <Image 
        src={WebImg}
        alt="وصف الصورة" 
        width={100}
        height={100} 
        className=' '
        />  
        </div>
        <h3 className="text-xl font-semibold text-gray-700">تصميم مواقع</h3>
        <p className="mt-2 text-gray-700">تطوير وتصميم مواقع ويب احترافية وسريعة.</p>
      </div>
      <div  data-aos="fade-left" className="p-6 bg-gray-200 rounded-lg w-80">
        <div className=" flex justify-center">

        <Image 
        src={RocketImg}
        alt="وصف الصورة" 
        width={100}
        height={100} 
        className=' '
      />  
        </div>
        <h3 className="text-xl font-semibold text-gray-700 p-1 top-2">تحسين الأداء</h3>
        <p className="mt-2 text-gray-700">تحليل وتحسين أداء المواقع لتحميل أسرع.</p>
      </div>
      
    </div>
  </section>
          </>
  
)
}
