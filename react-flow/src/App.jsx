import React, { Fragment } from "react";
import { transformData } from "./components/utils/data-transformer";
import Hex from "./assets/Hex";
import Logo from "./assets/Logo";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Form from "./components/Form/Form";
import Container from "./components/Tree";
import { useSelector } from "react-redux";

export default function App() {
  const data = useSelector((state) => state.jsonHelper);
  console.log("App", data);
  const transformedData = transformData(data);
  return (
    <div className="App">
      {/* <Header /> */}
      <Form />
      <Container
        data={transformedData}
        nodeRender={(node) => {
          // console.log("node", node.data);
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
