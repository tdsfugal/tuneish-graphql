import { PageView } from "./page-views";

import { Home } from "./main";
import Nav from "./nav";

import { HomeLinks } from "../client";

const HomePage = () => {
  return (
    <PageView className="HomePage">
      <Nav midSection={<HomeLinks />} />
      <Home />
    </PageView>
  );
};

export default HomePage;
