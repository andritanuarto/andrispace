import React from "react";
import Header from "../components/shared/header";
import Hero from "../components/home/hero";

const Index = ({location}) => {
  return (
    <>
      <div className="home-container">
        <Header logoColor="#ffffff" />
        <Hero baseURL={location.href}/>
      </div>
    </>
  );
}

export default Index;