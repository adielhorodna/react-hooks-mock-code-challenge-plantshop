import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";


function PlantList({ plantCards }) {

  const itemsToDisplay = 
    plantCards.map(plant => 
    <PlantCard
      key={plant.id}
      name = {plant.name}
      image = {plant.image}
      price = {plant.price}
      id = {plant.id}
    />)


  return (
    <ul className="cards">
      {itemsToDisplay}
      {/* // key={card.id}
      // name={card.name}
      // image={card.image}
      // price={card.price}
      */}
    </ul>
  );
}

export default PlantList;
