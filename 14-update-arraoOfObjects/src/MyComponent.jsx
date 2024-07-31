import { useState } from "react";
import { literal } from "zod";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    console.log(newCar);
    setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
      
  }
  function handleRemoveCar(index) {
    setCars(c => (c.filter((_, i)=> i != index)))
  }
  function handleYearChange(event) {
    setCarYear(event.target.value);
    
  }
  function handleMakeChange(event) {
    setCarMake(event.target.value);
    
  }
  function handleModelChange(event) {
    setCarModel(event.target.value);
    
  }

  return (
    <>
      <div>
        <h2>List of Car Objects</h2>
        <ul>
          {cars.map((car, index) => 
            <li style={{cursor:"pointer"}} onClick={() => handleRemoveCar(index)} key={index}>     {car.year} {car.make} {car.model}
            </li>)}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange} />
        <br />
        <input
          id="carMake"
          type="text"
          value={carMake}
          placeholder="Enter Car Make"
          onChange={handleMakeChange}
        />
        <br />
        <input
          id="carModel"
          type="text"
          value={carModel}
          placeholder="Enter Car Model"
          onChange={handleModelChange}
        />
        <br />
        <button onClick={handleAddCar}>Add Car</button>
      </div>
    </>
  );
}

export default MyComponent;
