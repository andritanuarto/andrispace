import React from "react";
import { connect } from "react-redux";
import Header from "../components/shared/header";
import Hero from "../components/home/hero";

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