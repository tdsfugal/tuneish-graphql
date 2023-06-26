import { NavView, NavWrapper, NavBackgroundView } from "src/styles/server";

import HeaderControl from "./header-control";
import FooterControl from "./footer-control";

const Nav = ({ midSection }) => {
  return (
    <NavWrapper className="NavWrapper">
      <NavBackgroundView className="NavBackgroundView" />
      <NavView className="NavView">
        <HeaderControl />
        {midSection}
        <FooterControl />
      </NavView>
    </NavWrapper>
  );
};

export default Nav;
