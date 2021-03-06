import React from "react";
import PiesChart from "../presentational/PiesChart";
import useHXR from "../hooks/useHXR";

function TopReferrer() {
  const result = [];
  const label = [];
  const values = [];
  const { data } = useHXR("https://static.adbrix.io/front/coding-test/event_3.json");

  if (data != null) {
    const { rows } = data;
    const responeData = [...rows].sort((a, b) => Number(b[1]) - Number(a[1]));
    let etc = 0;
    for (let i = 0; i < responeData.length; i += 1) {
      if (i < 4) {
        const resultItem = {
          id: responeData[i][0],
          label: responeData[i][0],
          value: Number(responeData[i][1]),
        };
        result.push(resultItem);
        label.push(responeData[i][0]);
        values.push(Number(responeData[i][1]));
      } else {
        etc += Number(responeData[i][1]);
      }
    }
    result.push({
      id: "etc",
      label: "etc",
      value: etc,
    });
    label.push("etc");
    values.push(etc);
  }

  return (
    <div>
      <PiesChart ChartData={result} labels={label} values={values} />
    </div>
  );
}

export default TopReferrer;
