import React, { Fragment } from "react";
import data from "./components/mocks/data-vis.json";
import Tree from "./components/Tree";
import { transformData } from "./components/utils/data-transformer";
import Hex from "./assets/Hex";
import Logo from "./assets/Logo";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Form from "./components/Form/Form";

const transformedData = transformData(data);

export default function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Form />
      <Tree
        data={transformedData}
        nodeRender={(node) => {
          console.log("node", node.data.DisplayName);
          return (
            <Fragment>
              {node.parent ? (
                <Hex className="d3-tree-nodes" data={node.data} />
              ) : (
                <Logo className="d3-tree-nodes" />
              )}
            </Fragment>
          );
        }}
      />
      {/* <Footer /> */}
    </div>
  );
}
