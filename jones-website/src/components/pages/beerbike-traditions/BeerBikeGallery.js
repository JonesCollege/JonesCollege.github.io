import React from "react";
import AutoPlaySlider from "./AutoPlaySlider";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import Images
import image1 from "./INFO/beerbikeimages/img_1.jpg";
import image2 from "./INFO/beerbikeimages/2.JPG";
import image3 from "./INFO/beerbikeimages/img_3.jpg";
import image4 from "./INFO/beerbikeimages/4.JPG";
import image5 from "./INFO/beerbikeimages/img_5.jpg";
import image6 from "./INFO/beerbikeimages/6.JPG";
import image7 from "./INFO/beerbikeimages/img_7.jpg";
import image8 from "./INFO/beerbikeimages/8.JPG";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

const BeerBikeGallery = () => {
  return (
    <>
      <div
        className="gallerytitle"
        style={{
          fontFamily: "futuraMediumBT",
          fontWeight: "700",
          fontSize: "15px",
          letterSpacing: "0.39em",
          padding: "10px",
        }}
      >
        CHECK OUT SOME RAD PICS !
      </div>
      <div
        style={{ width: "100%", padding: "0px 0px 100px 0px" }}
      >
        <AutoPlaySlider images={images} />
      </div>
    </>
  );
};

export default BeerBikeGallery;
