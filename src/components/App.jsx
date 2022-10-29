import React, { useState } from "react";

function App() {
  const ctime = new Date().toLocaleTimeString();
  const [time, settime] = useState(ctime);
  function newTime() {
    const ntime = new Date().toLocaleTimeString();
    settime(ntime);
  }
  
     setInterval(newTime, 1000);
    

  return (
    <div className="container">
      <h1>{time}</h1>

      <button onClick={newTime}>Get Time</button>
    </div>
  );
}

export default App;
