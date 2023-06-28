import React from "react";
import { HomeView, HomeBackgroundView, MainWrapper } from "/src/styles/server";

import Footer from "../footer";
import Header from "../header";

const Home = () => {
  return (
    <MainWrapper className="MainWrapper">
      <HomeBackgroundView className="HomeBackground" />
      <Header page="home" />
      <HomeView className="HomeScroll">
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
      <Footer />
    </MainWrapper>
  );
};

export default Home;
