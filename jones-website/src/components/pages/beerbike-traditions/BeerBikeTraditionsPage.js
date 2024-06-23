import React from "react";
import History from "./History";
import Traditions from "./Traditions";
import BeerBikeHeader from "./BeerBikeHeader";
import BeerBikegallery from "./BeerBikeGallery";
import JonesWinsAgain from "./JonesWinsAgain";
import "./css/BeerBikeTraditionsPage.css";
import Footer from "../../Footer";
import { useState } from "react";
import Anthem from "./Anthem";
import { useScrollToTop, useResizeWidth } from "../../../utility";

const BeerBikeTraditionsPage = () => {
  const [resize, setResize] = useState(false)
  useResizeWidth(500, setResize)
  useScrollToTop();

  return (
    <div>
      <Anthem />
      <div className="beerbikepage">
        <BeerBikeHeader />
        {!resize && <BeerBikegallery />}
        <JonesWinsAgain />
        <Traditions />
        <History />
      </div>
      <Footer/>
    </div>
  );
};

export default BeerBikeTraditionsPage;
