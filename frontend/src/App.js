import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api")   // In AKS this will hit backend service via ingress
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error connecting backend"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Azure DevOps AKS Demo</h1>
        <p>Backend Response:</p>
        <h2>{message}</h2>
      </header>
    </div>
  );
}

export default App;
