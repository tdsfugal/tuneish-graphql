import React from "react";
import { HomeView, HomeBackgroundView, MainWrapper } from "/src/styles/server";

import { FooterDrawer, HeaderDrawer } from "src/components/client";

import LinkBanner from "../link-banner";

const Home = () => {
  return (
    <MainWrapper className="MainWrapperView">
      <HomeBackgroundView className="HomeBackgroundView" />
      <HeaderDrawer>
        <LinkBanner page="home" />
      </HeaderDrawer>
      <HomeView className="HomeScrollView">
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
      </HomeView>
      <FooterDrawer />
    </MainWrapper>
  );
};

export default Home;
