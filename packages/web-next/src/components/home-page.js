import { PageView } from "src/styles/server";

import { Home, Nav } from "./server";
import { HomeLinks } from "./client";

const HomePage = () => {
  return (
    <PageView>
      <Nav midSection={<HomeLinks />} />
      <Home />
    </PageView>
  );
};

export default HomePage;
