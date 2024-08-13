import React from 'react';
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import ContactImg from "./contact.jpg.png"

function Contact() {
  return (
    <div>
      <Navbar/>
    <h1 className="page_title">
      Contact
    </h1>
    <img src={ContactImg}height="400px" width="600px" object-fit="content"/>
    <Footer/>
    </div>
  )
}

export default Contact

