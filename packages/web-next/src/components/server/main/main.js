import React from "react";
import { MainView, MainWrapper } from "/src/styles/server";

import MainBackground from "./main-background";

const Main = () => {
  return (
    <MainWrapper className="MainWrapperView">
      <MainBackground />
      <MainView className="MainScrollView">
        <div
          style={{
            height: "1100px",
            width: "300px",
            backgroundColor: "skyblue",
          }}
        />
        <div
          style={{
            height: "1300px",
            width: "400px",
            backgroundColor: "lightgreen",
          }}
        />
        <div
          style={{
            height: "1800px",
            width: "100px",
            backgroundColor: "brown",
          }}
        />
        <div
          style={{
            height: "1000px",
            width: "300px",
            backgroundColor: "lightgray",
          }}
        />
        <div
          style={{
            height: "300px",
            width: "100px",
            backgroundColor: "pink",
          }}
        />
      </MainView>
    </MainWrapper>
  );
};

export default Main;
