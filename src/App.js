import "./App.css";
import React from "react";
import ConnectedUser from "./components/container/ConnectedUser";
import ConnectedCount from "./components/container/ConnectedCount";

function App() {
  return (
    <div className="App">
      <ConnectedUser />
      <ConnectedCount />
    </div>
  );
}

export default App;
