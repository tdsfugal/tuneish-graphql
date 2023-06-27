import React from "react";
import { MainView, MainWrapper, MainBackgroundView } from "/src/styles/server";

import { HeaderDrawer } from "src/components/client";

import LinkBanner from "../link-banner";

const Main = () => {
  return (
    <MainWrapper className="MainWrapperView">
      <MainBackgroundView className="MainBackgroundView" />
      <HeaderDrawer>
        <LinkBanner page="home" />
      </HeaderDrawer>
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
