import React from 'react';
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HomeImg from "./home.jpg.png";

function Home() {
  return (
    <div>
      <Navbar/>
    <h1 className="page_title">
      Home
    </h1>
   
    <img src={HomeImg} className="image" height="400px" width="600px" object-fit="content"/>
    <Footer/>
    </div>

  )
}

export default Home
