import React from "react";
import { useReactiveVar } from "@apollo/client";

import { HomeBackgroundView, MainWrapper } from "/src/styles/server";
import { HOME_MANIFEST } from "src/state/reactive";

import { HomeScroll } from "src/components/client";

import Footer from "../footer";
import Header from "../header";

const Home = () => {
  const manifest = useReactiveVar(HOME_MANIFEST);

  return (
    <MainWrapper className="MainWrapper">
      <HomeBackgroundView className="HomeBackground" />
      <Header page="home" />
      <HomeScroll className="HomeScroll" />
      <Footer />
    </MainWrapper>
  );
};

export default Home;
