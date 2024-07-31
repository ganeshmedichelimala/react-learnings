import React,{useState, useEffect} from "react"

function MyComponent(){
  const [count, setCount] = useState(12)
  const [color, setColor] = useState("green")



  useEffect(()=>{
    document.title =`count : ${count} ${color}`
  },[count, color])
  function addCount(){
    setCount(c => c + 1)
  }
  
  function subCount(){
    setCount(c => c - 1)
  }
  function colorChange(){
    setColor(c => c === "green" ? "red" : "green")
  }

  return(
    <>
      <p style={{color:`${color}`}}>count : {count}</p>
      <button onClick={addCount}>ADD</button>
      <button onClick={subCount}>SUB</button>
      <button onClick={colorChange}>CHANGE COLOR</button>
    </>
  )
}

export default MyComponent