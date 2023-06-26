import React from "react";
import Link from "next/link";
import { MainView, MainWrapper, MainBackgroundView } from "/src/styles/server";

const Main = () => {
  return (
    <MainWrapper className="MainWrapperView">
      <MainBackgroundView className="MainBackgroundView" />
      <MainView className="MainScrollView">
        <Link href="/blog">BLOG</Link>
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
