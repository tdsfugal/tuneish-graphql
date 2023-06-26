import { PageView } from "src/styles/server";

import { Main, Nav } from "./server";

const HomePage = () => {
  return (
    <PageView>
      <Nav page={"Home"} />
      <Main />
    </PageView>
  );
};

export default HomePage;
