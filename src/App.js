import React, { useState } from "react";
import './App.css';





function App() {

  const [emotion, setEmotion] = useState("Happy");
  
  
  return(
    <>

   <h1>Current emotion is {emotion}.</h1>
   <button onClick={()=>setEmotion("frustrated")}> Frustrate</button>
    <button onClick={()=>setEmotion("enthusiastic")}> Enthusiastic</button>
    </>

  );
 
}

export default App;
