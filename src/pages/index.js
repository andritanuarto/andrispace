import React from "react";
import Header from "../components/shared/header";
import Hero from "../components/home/hero";
import Fade from 'react-reveal/Fade';

const Index = () => {
  return (
    <>
      <div className="home-container">
        <Header/>
        <Hero/>
      </div>
    </>
  );
}

export default Index;