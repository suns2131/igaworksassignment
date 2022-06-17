import React, { useCallback, useMemo, useRef } from "react";
import styled from "styled-components";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

function Tables({ name, rowDatas }) {
  const gridRef = useRef();
  const hearder = [{ field: "Metric" }];

  // const rowDatas = [
  //   {
  //     orgHierarchy: ["Erica Rogers"],
  //     jobTitle: "CEO",
  //     employmentType: "Permanent",
  //     money: 5000,
  //   },
  //   {
  //     orgHierarchy: ["Erica Rogers", "Malcolm Barrett"],
  //     jobTitle: "Exec. Vice President",
  //     employmentType: "Permanent",
  //     money: 1000,
  //   },

  //   {
  //     orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker"],
  //     jobTitle: "Director of Operations",
  //     employmentType: "Permanent",
  //     money: 1000,
  //   },
  //   {
  //     orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker", "Brittany Hanson"],
  //     jobTitle: "Fleet Coordinator",
  //     employmentType: "Permanent",
  //     money: 1000,
  //   },
  //   {
  //     orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker", "Brittany Hanson", "Leah Flowers"],
  //     jobTitle: "Parts Technician",
  //     employmentType: "Contract",
  //     money: 1000,
  //   },
  //   {
  //     orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker", "Brittany Hanson", "Tammy Sutton"],
  //     jobTitle: "Service Technician",
  //     employmentType: "Contract",
  //     money: 1000,
  //   },
  //   {
  //     orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker", "Derek Paul"],
  //     jobTitle: "Inventory Control",
  //     employmentType: "Permanent",
  //   },

  //   {
  //     orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland"],
  //     jobTitle: "VP Sales",
  //     employmentType: "Permanent",
  //   },
  //   {
  //     orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland", "Morris Hanson"],
  //     jobTitle: "Sales Manager",
  //     employmentType: "Permanent",
  //   },
  //   {
  //     orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland", "Todd Tyler"],
  //     jobTitle: "Sales Executive",
  //     employmentType: "Contract",
  //   },
  //   {
  //     orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland", "Bennie Wise"],
  //     jobTitle: "Sales Executive",
  //     employmentType: "Contract",
  //   },
  //   {
  //     orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland", "Joel Cooper"],
  //     jobTitle: "Sales Executive",
  //     employmentType: "Permanent",
  //   },
  // ];

  const autoGroupColumnDef = useMemo(() => {
    return {
      headerName: "Group By",
      minWidth: 300,
      cellRendererParams: {
        suppressCount: true,
      },
    };
  }, []);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
    };
  }, []);

  const getDataPath = useCallback(data => {
    return data.groupBy;
  }, []);

  return (
    <ComponentDiv>
      <h4>{name}</h4>
      <div className="ag-theme-alpine" style={{ width: "97vw", height: "48vh" }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowDatas}
          columnDefs={hearder}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          treeData
          animateRows
          groupDefaultExpanded={-1}
          getDataPath={getDataPath}
        />
      </div>
    </ComponentDiv>
  );
}

const ComponentDiv = styled.div`
  /* width: 700px;
  height: 500px; */
  border: 1px solid #eee;
`;

export default Tables;
