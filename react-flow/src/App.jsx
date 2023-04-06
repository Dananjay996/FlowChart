import React, { useCallback } from "react";
import Header from "./components/Header/Header";
import Canvas from "./components/Canvas/Canvas";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";

export default function App() {
  return (
    <>
      <Header />
      <Form />
      <Canvas />
      <Footer />
    </>
  );
}
