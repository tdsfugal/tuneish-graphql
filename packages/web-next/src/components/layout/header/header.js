import React from "react";

import { useReactiveVar } from "@apollo/client";
import { PAGE_META_DATA } from "src/state/reactive";

import { HeaderView, HeaderTitleView } from "src/styles";

const Header = () => {
  const { title } = useReactiveVar(PAGE_META_DATA);
  console.log(title);

  return (
    <HeaderView>
      <HeaderTitleView key="htl">{title}</HeaderTitleView>
    </HeaderView>
  );
};

export default Header;
