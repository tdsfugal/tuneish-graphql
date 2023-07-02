import {
  SplashView,
  MainWrapper,
  SplashBackgroundView,
} from "/src/styles/server";

import Footer from "../footer";
import Header from "../header";

const Splash = () => {
  return (
    <MainWrapper className="MainWrapper">
      <SplashBackgroundView className="SplashBackground" />
      <Header page="splash" />
      <SplashView className="Splash"></SplashView>
      <Footer />
    </MainWrapper>
  );
};

export default Splash;
