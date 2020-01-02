import React from "react";
import Header from "../shared/header";
import utgImgBanner from "../home/hero-images/utg/utg-case-study-banner.jpg";

export default ({ children }) => {
  return (
    <div className="interior-page">
      <Header/>
      <div className="interior-page__content">
        <div className="interior-page__heading">
          <h1>Under The Gui (UTG) – Website redesign for coding school for kids </h1>
          <span className="interior-page__heading__date">December 18, 2019</span>
        </div>
        <div className="interior-page__heading__img">
          <img src={utgImgBanner} />
        </div>
        {children}
      </div>
    </div>
  )
}