
import { Cursor } from "mongoose";
import React, { useState } from "react";

function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Oranga", "Banana"])

  function handleAddFood(){
    
    const newFood = document.getElementById("foodInput").value
    document.getElementById("foodInput").value = ""
    setFoods(f=>([...f,newFood]) )
  }

  function handleRemoveFood(index){
    setFoods(foods.filter((_, i) => i != index))
    
  }
  return (
    <>
    <h1>List of Foods</h1>
    <ul>
      {foods.map((food, index) => <li style={{cursor:"pointer"}} key={index}
       onClick={() => handleRemoveFood(index)}>{food} </li>)}
    </ul>
    <input type="text" id="foodInput" placeholder="Enter Food Item" />
    <button onClick={handleAddFood}>Add Food</button>
    </>
  );
}
export default MyComponent;
