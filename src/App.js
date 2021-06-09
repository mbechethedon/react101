import React, { useState, useEffect } from "react";
import './App.css';





function App() {

  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("tired");
  useEffect(()=>{
console.log(`It's ${emotion} around here!`);
  },[emotion]);
  
  useEffect(()=>{
console.log(`It's ${secondary} around here!`);
  },[secondary]);
  
  
  return(
    <>

   <h1>Current emotion is {emotion} and {secondary}.</h1>
   <button onClick={()=>setEmotion("Happy")}> Happy</button>
    <button onClick={()=>setSecondary("Crappy")}> Make Crappy</button>
   <button onClick={()=>setEmotion("Frustrated")}> Frustrate</button>
    <button onClick={()=>setEmotion("Enthusiastic")}> Enthusiastic</button>
    </>

  );
 
}

export default App;
