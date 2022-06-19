import "./App.css";
import React from "react";
import useHXR from "./components/hooks/useHXR";
import DragDrop from "./components/DashBord";

function App() {
  const { data } = useHXR("https://static.adbrix.io/front/coding-test/event_1.json");
  return (
    <div className="App">
      <div className="Apps">
        <DragDrop data={data} />
      </div>
    </div>
  );
}

export default App;
