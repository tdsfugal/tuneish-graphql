import { MainWrapper } from "src/styles";

import { Footer, Header } from "../_marginals";

import { SplashView, SplashBackgroundView } from "./splash-views";

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
