import { PageView } from "src/styles/server";

import { Main, Nav } from "./server";
import { MainLinks } from "./client";

const HomePage = () => {
  return (
    <PageView>
      <Nav midSection={<MainLinks />} />
      <Main />
    </PageView>
  );
};

export default HomePage;
