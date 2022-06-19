import React, { useCallback } from "react";
import useHXR from "../hooks/useHXR";
import Tables from "../presentational/Tables";

function ReferrerTable() {
  const { data } = useHXR("https://static.adbrix.io/front/coding-test/event_4.json");
  const result = [];

  const rowData = useCallback(
    rows => {
      for (let i = 0; i < rows.length; i += 1) {
        const iCountry = rows[i][0];
        const iRegion = rows[i][1];
        const iCity = rows[i][2];
        result.push({
          country: iCountry !== "" ? iCountry : "(empty)",
          region: iRegion !== "" ? iRegion : "(empty)",
          city: iCity !== "" ? iCity : "(empty)",
          Metric: Number(rows[i][3]),
        });
      }
    },
    [data],
  );

  if (data != null) {
    const { rows } = data;
    rowData(rows);
  }

  return <Tables rowDatas={result} />;
}

export default ReferrerTable;
