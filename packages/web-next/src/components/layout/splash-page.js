import { PageView } from "./page-views";

import { Splash } from "./main";
import Nav from "./nav";

const SplashPage = () => {
  return (
    <PageView className="SplashPage">
      <Nav midSection={null} />
      <Splash />
    </PageView>
  );
};

export default SplashPage;
