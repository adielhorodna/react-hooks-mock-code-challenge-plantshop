import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantCards, setPlantCards] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then((cards) => setPlantCards(cards))
  }, [])

  const submittingForm = (newObject) => {
    setPlantCards([...plantCards, newObject])

  }

  return (
    <main>
      <NewPlantForm submittingForm = {submittingForm}/>
      <Search />
      <PlantList plantCards={plantCards} />
    </main>
  );
}

export default PlantPage;
