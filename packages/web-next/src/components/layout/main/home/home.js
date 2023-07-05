import React from "react";
import { useReactiveVar } from "@apollo/client";

import { MainWrapper } from "../../page-views";

import { HomeBackgroundView } from "./home-views";

import { HOME_MANIFEST } from "src/state/reactive";

import { HomeScroll, SetupTray } from "src/components/client";

import { Footer, Header } from "../_marginals";

const Home = () => {
  const manifest = useReactiveVar(HOME_MANIFEST);

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
