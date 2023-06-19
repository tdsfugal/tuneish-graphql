import React from "react";
import { MainView } from "/src/styles";

import MainBackground from "./main-background";

const Main = ({ pagePath }) => {
  return (
    <MainView>
      <MainBackground />
    </MainView>
  );
};

export default Main;
