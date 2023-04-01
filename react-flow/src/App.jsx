import React, { useCallback } from "react";
import Canvas from "./components/Canvas/Canvas";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Canvas />
      <Footer />
    </>
  );
}
