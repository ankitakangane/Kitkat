import React from 'react';
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import AboutImg from "./about.jpg.png";

function About() {
  return (
    <div>
      <Navbar/>
      <h1 className="page_title">
      About
    </h1>
    <img src={AboutImg} height="400px" width="600px" object-fit="content"/>
    <Footer/>
    </div>
  )
}

export default About
