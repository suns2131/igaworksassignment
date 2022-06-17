import React, { useCallback } from "react";
import useHXR from "../hooks/useHXR";
import Tables from "../presentational/Tables";

function ReferrerTable() {
  const name = "TopReferral";
  const { data } = useHXR("https://static.adbrix.io/front/coding-test/event_4.json");
  const result = [];
  let dts = [];

  const rowData = useCallback(
    rows => {
      let ipCountry = [];
      let ipRegion = [];
      let ipCity = [];
      const last = [];
      for (let i = 0; i < rows.length; i += 1) {
        ipCountry.push(rows[i][0]);
        ipRegion.push(rows[i][1]);
        ipCity.push(rows[i][2]);
        result.push({ groupBy: [rows[i][0], rows[i][1], rows[i][2]], Metric: Number(rows[i][3]) });
      }

      ipCountry = new Set(ipCountry);
      ipCountry = [...ipCountry];
      ipRegion = new Set(ipRegion);
      ipRegion = [...ipRegion];
      ipCity = new Set(ipCity);
      ipCity = [...ipCity];
      for (let i = 0; i < ipCountry.length; i += 1) {
        const country = rows
          .filter(el => el[0] === ipCountry[i])
          .map(v => v[3] * 1)
          .reduce((acc, cur) => acc + cur);
        const countryDt = {
          groupBy: [ipCountry[i]],
          Metric: country,
        };

        last.push(countryDt);
      }

      for (let i = 0; i < ipRegion.length; i += 1) {
        const Region = rows.filter(el => el[1] === ipRegion[i]).map(v => [v[0], v[1], v[3] * 1]);
        const RegionCnt = Region.reduce((acc, cur) => Number(acc) + Number(cur[2]), 0);
        const regionDt = { groupBy: [Region[0][0], Region[0][1]], Metric: RegionCnt };
        last.push(regionDt);
      }
      dts = result.concat(last);
    },
    [data],
  );

  if (data != null) {
    const { rows } = data;
    rowData(rows);
  }

  return <Tables name={name} rowDatas={dts} />;
}

export default ReferrerTable;
