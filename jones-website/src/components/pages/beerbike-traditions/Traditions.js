import React from "react";
import "./css/Traditions.css";

import image1 from "./INFO/traditions_images/fitq.JPG";
import image2 from "./INFO/traditions_images/coke_cart.jpeg";
import image3 from "./INFO/traditions_images/night_ride.JPG";


const Traditions = () => {
  return (
    <div className="traditions-container">
      <h1>Traditions</h1>
      <div className="traditions">
      <Tradition
          photo={image1}
          traditionName="FITQ"
          paragraphText="After a long and busy week, Jonesians eagerly flock to the Quad on Fridays for FitQ (Fridays in the Quad), the ultimate kickoff to the weekend filled with music, games, and food. It's a time where we come together to unwind and celebrate. Organized by committees like Culturals, Socials, and Jitchen, each FitQ brings its own vibrant theme and unique activities. Imagine diving into a summer extravaganza complete with water slides, a dunk tank, and ice cream. Or travel the globe without leaving campus at Drinks Around the World FitQ, sampling exotic beverages and discovering new favorites. Beyond the fun-filled events, FitQ is where friendships flourish and campus spirit thrives. "
        />
        <Tradition
          photo={image2}
          traditionName="Coke Cart"
          paragraphText="In the fiercest and most deadly battle of Floor Olympics, freshmen from each floor are offered up as tributes to battle for the honor of their floor. Chosen at a reaping alongside an upperclassman mentor, one freshman girl and one freshman boy must prepare themselves for the greatest challenge of their life. Additionally, one female and one male OC (off-campus) student are selected to be the careers of the battle. To show support for their tributes, floormates win points to purchase gifts by demonstrating their knowledge and creativity for the Hunger Games. You will not want to miss this epic war complete with swords (noodles), guns (water guns), and blood (red paint)!"
        />
        <Tradition
          photo={image3}
          traditionName="Night Ride"
          paragraphText='Get ready for Night Ride, the thrilling start to Beer Bike Week that brings Jones together for a night of fun and high spirits! Jonesians paint up in vibrant green and purple, ready to embark on an unforgettable adventure. We pile into cars, crank up the music, and take to the inner loop, cheering and blasting tunes as our bikers bike alongside. Once we reach the bike track, the real fun begins. We introduce our chug team, bike team, and pit crew, hyping them up with cheers and chants for a mock Beer Bike race. The night culminates in a lively celebration with plenty of cheers and a pizza party. Night Ride is a vibrant, high-energy tradition that sets the tone for an amazing Beer Bike Week!'
        />
      </div>
    </div>
  );
};

export default Traditions;

const Tradition = ({ photo, traditionName, paragraphText }) => {
  const imageStyle = {
    backgroundColor: "red",
    backgroundImage: `url(${photo})`,
  };

  return (
    <div className="tradition-container">
      <div className="photo" style={imageStyle}></div>
      <div className="text-container">
        <h1>{traditionName}</h1>
        <p>{paragraphText}</p>
      </div>
    </div>
  );
};