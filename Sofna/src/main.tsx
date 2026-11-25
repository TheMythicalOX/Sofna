import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Header from "./TSX/Header";
import Body from "./TSX/Body";
import Footer from "./TSX/Footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="bg-stone-700 h-[100vh] w-[100vw] grid grid-rows-12">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  </React.StrictMode>,
);
