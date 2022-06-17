import React from "react";
import Summary from "../presentational/Summary";

function ConnectedUser() {
  const name = "접속유저";
  return <Summary name={name} />;
}

export default ConnectedUser;
