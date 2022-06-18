import React, { useMemo, useRef } from "react";
import styled from "styled-components";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

function Tables({ rowDatas }) {
  const gridRef = useRef();
  const hearder = [
    { field: "country", rowGroup: true, hide: true },
    { field: "region", rowGroup: true, hide: true },
    { field: "Metric", aggFunc: "sum" },
  ];

  const autoGroupColumnDef = useMemo(() => {
    return {
      headerName: "Group By",
      field: "city",
      sortable: true,
      minWidth: 300,
    };
  }, []);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      filter: true,
      sortable: true,
      resizable: true,
    };
  }, []);

  return (
    <ComponentDiv>
      <div className="grid-wrapper">
        <div className="ag-theme-alpine" style={{ height: "100%" }}>
          <AgGridReact
            ref={gridRef}
            rowData={rowDatas}
            columnDefs={hearder}
            defaultColDef={defaultColDef}
            autoGroupColumnDef={autoGroupColumnDef}
            groupDisplayType="singleColumn"
            animateRows
          />
        </div>
      </div>
    </ComponentDiv>
  );
}

const ComponentDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 94%;

  .grid-wrapper {
    flex: 1 1 0px;
    width: 100%;
  }
`;

export default Tables;
