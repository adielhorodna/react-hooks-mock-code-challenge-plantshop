import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantCards, setPlantCards] = useState([])
  const [filteredPlantCards, setFilteredPlantCards] = useState([])
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then((cards) => {setPlantCards(cards)
      setFilteredPlantCards(cards)
    })
  }, [])

  useEffect(() => {
    setFilteredPlantCards(plantCards.filter(item=> item.name.toLowerCase().includes(searchInput.toLowerCase())))
  }, [searchInput, plantCards])

  const submittingForm = (newObject) => {

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObject)
    })
    .then(response => response.json())
    .then(data =>  setPlantCards(prevState => [...prevState, data]))
  }

  return (
    <main>
      <NewPlantForm submittingForm = {submittingForm}/>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <PlantList plantCards={filteredPlantCards} />
    </main>
  );
}

export default PlantPage;
