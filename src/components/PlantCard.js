import React, { useState } from "react";


function PlantCard({name, image, id, price}) {

  const [isInStock, setInStock] = useState(true)

  const handleClick = () =>{
    setInStock(prev => !prev)
  }



  return (
  
  
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button 
        onClick = {handleClick}
        className="primary">In Stock
        </button>
      ) 
      : 
      //false:
      (
        <button onClick = {handleClick}>
          Out of Stock
          </button>
      )}
    </li>
  
  );

}

export default PlantCard;
