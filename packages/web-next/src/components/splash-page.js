import { PageView } from "src/styles/server";

import { Splash, Nav } from "./server";

const SplashPage = () => {
  return (
    <PageView className="SplashPage">
      <Nav midSection={null} />
      <Splash />
    </PageView>
  );
};

export default SplashPage;
