import { useRef } from "react";
import { useEffect } from "react"
import { useState } from "react"

function MyComponent(){ 
  const ref = useRef(0)
  console.log(ref);

  useEffect(()=> {
    console.log("COMPONENT RENDERED");
  })

  function handleClick(){
    ref.current++;
    console.log(ref.current);
  }



  return(<>
    <button onClick={handleClick}>Click me!</button>
    <br />
    <br />
    <input type="text" />
  </>)
}


export default MyComponent