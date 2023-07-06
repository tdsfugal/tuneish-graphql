import React from "react";

import { MainWrapper } from "../../page-views";

import { HomeBackgroundView } from "./home-views";

import { HomeScroll, SetupTray } from "src/components/client";

import { Footer, Header } from "../_marginals";

const Home = () => {
  return (
    <MainWrapper className="MainWrapper">
      <HomeBackgroundView className="HomeBackground" />
      <Header page="home" />
      <SetupTray />
      <HomeScroll className="HomeScroll" />
      <Footer />
    </MainWrapper>
  );
};

export default Home;
