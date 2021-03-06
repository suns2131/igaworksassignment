/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo, forwardRef } from "react";
import RGL from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { produce } from "immer";
import { isEqual } from "lodash";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ConnectedUser from "./container/ConnectedUser";
import ConnectedCount from "./container/ConnectedCount";
import EventProgress from "./container/EventProgress";
import ReferrerTable from "./container/ReferrerTable";
import TopReferrer from "./container/TopReferrer";

const settingData = JSON.parse(sessionStorage.getItem("setting"));
let currentLayout;
const layout1 = [
  { i: "1", w: 6, h: 1, x: 0, y: 0 },
  { i: "2", w: 12, h: 2, x: 0, y: 0 },
  { i: "3", w: 6, h: 1, x: 6, y: 0 },
  { i: "4", w: 6, h: 2, x: 0, y: 0 },
  { i: "5", w: 6, h: 2, x: 6, y: 0 },
];

const defaultlayout = [
  { i: "1", w: 6, h: 1, x: 0, y: 0 },
  { i: "2", w: 12, h: 1, x: 0, y: 0 },
  { i: "3", w: 6, h: 1, x: 6, y: 0 },
  { i: "4", w: 6, h: 2, x: 0, y: 0 },
  { i: "5", w: 6, h: 2, x: 6, y: 0 },
];

export default function App({ data }) {
  const [groups, setGroups] = useState(["group1", "group2", "group3"]);
  return (
    <>
      <Grid debug data={data} />
      <div style={{ marginBottom: 8 }} />
      <DragDropContext
        onDragEnd={result => {
          if (!result.destination) return;
          setGroups(prev =>
            produce(prev, draft => {
              const [item] = draft.splice(result.source.index, 1);
              draft.splice(result.destination.index, 0, item);
            }),
          );
        }}
      >
        <Droppable droppableId="groups">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {groups.map((id, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {provided => (
                    <Group
                      ref={provided.innerRef}
                      id={id}
                      draggableProps={provided.draggableProps}
                      handleProps={provided.dragHandleProps}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

function Grid(props) {
  const [layout, setLayout] = useState(settingData !== null ? settingData : layout1);
  const toggleLayout = () => setLayout(prev => (prev === layout1 ? defaultlayout : layout1));

  const handleLayoutChange = layout => {
    setLayout(prev => {
      const next = layout.map(({ i, w, h, x, y }) => ({ i, w, h, x, y }));
      currentLayout = next;
      return isEqual(next, prev)
        ? prev
        : produce(prev, draft => {
            draft[0].w = 6;
          });
    });
  };

  return (
    <div>
      {props.debug && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "10px",
            marginRight: "10px",
            marginBottom: "5px",
          }}
        >
          <button onClick={toggleLayout}>?????????</button>{" "}
          <button
            onClick={() => {
              sessionStorage.setItem("setting", JSON.stringify(currentLayout));
            }}
          >
            ????????????
          </button>
        </div>
      )}
      <div style={{ backgroundColor: "white" }}>
        <RGL
          containerPadding={[0, 0]}
          layout={layout}
          width={1010}
          maxwidth={300}
          rowHeight={200}
          onLayoutChange={handleLayoutChange}
          draggableHandle=".handle"
          isDroppable
          style={{ background: "white" }}
        >
          <Item key="1" title="conUser">
            <ConnectedUser data={props.data} />
          </Item>
          <Item key="2" title="DAU">
            <EventProgress data={props.data} />
          </Item>
          <Item key="3" title="conCnt">
            <ConnectedCount data={props.data} />
          </Item>
          <Item key="4" title="pie">
            <TopReferrer />
          </Item>
          <Item key="5" title="tables">
            <ReferrerTable />
          </Item>
        </RGL>
      </div>
    </div>
  );
}

function Item(props) {
  const { title, hideHeader, style, ...rest } = props;
  return (
    <div {...rest} style={{ ...style, background: "rgba(0, 0, 0, 0.05)" }}>
      {!hideHeader && (
        <div
          className="handle"
          style={{
            cursor: "grab",
            textAlign: "left",
            fontWeight: "700",
            fontSize: "15px",
            marginLeft: "10px",
            marginTop: "10px",
            marginBottom: "10px",
            color: "#499eea",
          }}
        >
          {title === "conUser" && "????????????"}
          {title === "conCnt" && "????????????"}
          {(title === "tables" || title === "pie") && "TopReferrer"}
          {title === "DAU" && "DAU"}
        </div>
      )}
      {props.children}
    </div>
  );
}

const Group = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div ref={ref} {...props.draggableProps} style={{ ...props.draggableProps.style, marginBottom: 8 }}>
      <div
        style={{
          cursor: "pointer",
          background: "rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => setIsOpen(prev => !prev)}
        {...props.handleProps}
      />
    </div>
  );
});
