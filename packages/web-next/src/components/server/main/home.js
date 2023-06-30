import React from "react";
import { useReactiveVar } from "@apollo/client";

import { HomeView, HomeBackgroundView, MainWrapper } from "/src/styles/server";
import { HOME_MANIFEST } from "src/state/reactive";

import HomeItem from "src/components/client/home-item";

import Footer from "../footer";
import Header from "../header";

const Home = () => {
  const manifest = useReactiveVar(HOME_MANIFEST);
  const items = manifest.map(({ _id }) => <HomeItem key={_id} itemId={_id} />);

  return (
    <MainWrapper className="MainWrapper">
      <HomeBackgroundView className="HomeBackground" />
      <Header page="home" />
      <HomeView className="HomeScroll">{items}</HomeView>
      <Footer />
    </MainWrapper>
  );
};

export default Home;
