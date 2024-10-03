import React from "react";
import { Header, Hero } from "./components";
import { Main } from "./components/destination-section/Main";

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div style={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
        <Main />
      </div>
    </div>
  );
};
