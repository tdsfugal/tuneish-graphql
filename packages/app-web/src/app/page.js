"use client";

import { PageView } from "../styles/layout-views.c";

import { Splash } from "../components/main";
import Nav from "../components/nav";

const SplashPage = () => {
  return (
    <PageView className="SplashPage">
      <Nav midSection={null} />
      <Splash />
    </PageView>
  );
};

export default SplashPage;
