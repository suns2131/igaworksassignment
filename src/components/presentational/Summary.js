import React from "react";
import styled from "styled-components";

function Summary({ current, subtraction, description }) {
  return (
    <SummaryDiv>
      {/* <div className="TitleDiv">{name}</div> */}
      <div className="DescDiv">
        <SummarySpan>SUM</SummarySpan>
        <div>{description}</div>
      </div>
      <div className="Sums">{current.toLocaleString()}</div>
      {subtraction > 0 ? <div className="Plus">↑{subtraction}</div> : <div className="Minus">↓{subtraction}</div>}
    </SummaryDiv>
  );
}

const SummaryDiv = styled.div`
  /* width: inherit;
  height: inherit; */
  text-align: left;
  margin: 10px;

  .TitleDiv {
    font-weight: 1000;
    font-size: 19px;
    color: #499eea;
    margin-bottom: 10px;
  }
  .DescDiv {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: gray;
  }
  .Sums {
    font-size: 32px;
    font-weight: 700;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .Plus {
    color: #499eea;
    font-size: 20px;
  }
  .Minus {
    color: #499eea;
    font-size: 17px;
    font-weight: 700;
  }
`;

const SummarySpan = styled.span`
  background-color: #eeeeee;
  color: #777;
  font-weight: 500;
  padding: 3px;
  border-radius: 5px;
  margin-right: 5px;
`;

export default Summary;
