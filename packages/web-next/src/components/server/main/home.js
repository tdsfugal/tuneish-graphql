import React from "react";
import { HomeView, HomeBackgroundView, MainWrapper } from "/src/styles/server";

import HomeItem from "src/components/client/home-item";

import Footer from "../footer";
import Header from "../header";

const Home = () => {
  const items = [1, 2, 3, 4].map((x) => <HomeItem key={x} itemId={x} />);

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
