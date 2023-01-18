import React, {useState} from "react";


function NewPlantForm({submittingForm}) {

  const [formName, setFormName] = useState("")
  const [formImage, setFormImage] = useState("")
  const [formPrice, setFormPrice] = useState("")

  const handleFormName = (e) =>{
    setFormName(e.target.value)
  }

  const handleFormImage = (e) =>{
    setFormImage(e.target.value)
  }

  const handleFormPrice = (e) =>{
    setFormPrice(e.target.value)
    
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const newObject = {
      name: formName,
      image: formImage,
      price: formPrice,
    }
    submittingForm(newObject)


  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form >
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value = {formName}
          onChange = {handleFormName}
        />

        <input
          type="text"
          name="image" 
          placeholder="Image URL" 
          value = {formImage}
          onChange = {handleFormImage}
          />
        <input 
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value = {formPrice}
          onChange = {handleFormPrice}
          />
        <button 
          onClick = {handleSubmit}
          type="submit">
          Add Plant
        </button>
      </form>
    </div>
  );
}

export default NewPlantForm;
