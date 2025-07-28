"use client"
import Image from "next/image";
import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { Aboutus } from "./components/aboutus";
import { Contactus } from "./components/contactus";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
    <div className="flex"></div>
    <Navbar/>
    <Header/>
    <Aboutus/>
    <Contactus/>
    <Footer/>
    </>
  );
}
