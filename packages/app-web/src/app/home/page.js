"use client";

import { PageView } from "src/styles";

import { Home } from "src/components/main";
import Nav from "src/components/nav";
import { HomeLinks } from "src/components/client";

const HomePage = () => {
  return (
    <PageView className="HomePage">
      <Nav midSection={<HomeLinks />} />
      <Home />
    </PageView>
  );
};

export default HomePage;
