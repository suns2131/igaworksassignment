import "./App.css";
import React from "react";
import ConnectedUser from "./components/container/ConnectedUser";
import ConnectedCount from "./components/container/ConnectedCount";
import EventProgress from "./components/container/EventProgress";
import TopReferrer from "./components/container/TopReferrer";
import ReferrerTable from "./components/container/ReferrerTable";
import useHXR from "./components/hooks/useHXR";

function App() {
  const { data } = useHXR("https://static.adbrix.io/front/coding-test/event_1.json");
  return (
    <div className="App">
      <ConnectedUser data={data} />
      <ConnectedCount data={data} />
      <EventProgress data={data} />
      <TopReferrer />
      <ReferrerTable />
    </div>
  );
}

export default App;
