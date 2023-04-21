import React, { useCallback } from "react";
import Canvas from "./components/Canvas/Canvas";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from "./components/Canvas/data.json";

export default function App() {
  return (
    <>
      <Header />
      <Canvas data={data} />
      <Footer />
    </>
  );
}
