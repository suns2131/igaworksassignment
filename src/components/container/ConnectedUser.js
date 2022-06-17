import React from "react";
import Summary from "../presentational/Summary";

function ConnectedUser({ data }) {
  const name = "접속유저";
  let description = "";
  let subtraction = 0;
  let currentConnectCounter = 0;

  if (data != null) {
    const { headers, rows } = data;
    const responeData = [...rows].sort((a, b) => new Date(a[0]) - new Date(b[0]));
    const result = [];
    // console.log(responeData);
    for (let i = 0; i < responeData.length; i += 1) {
      result.push(responeData[i][1]);
    }
    currentConnectCounter = result.map(v => v * 1).reduce((acc, cur) => acc + cur);
    const todayCount = result.pop();
    const PrevDayCount = result.pop();
    // const prevCnt = result.map(v => v * 1).reduce((acc, cur) => acc + cur);
    subtraction = todayCount - PrevDayCount;
    description = headers[1].label;
    // console.log(`currentConnectCounter: ${currentConnectCounter}`);
  }

  return <Summary name={name} current={currentConnectCounter} subtraction={subtraction} description={description} />;
}

export default ConnectedUser;
