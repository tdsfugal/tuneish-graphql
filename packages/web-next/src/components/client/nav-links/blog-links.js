"use client";

import {
  NavLinksStaticGroupView,
  NavLinksButtonView,
  NavLinksTextView,
} from "./nav-links-views";

const BlogLinks = () => {
  return (
    <NavLinksStaticGroupView className="BlogLinks">
      <NavLinksButtonView className="BlogLinksButtonView">
        <NavLinksTextView className="BlogLinksTextView">Foo</NavLinksTextView>
      </NavLinksButtonView>
      <NavLinksButtonView className="BlogLinksButtonView">
        <NavLinksTextView className="BlogLinksTextView">Bar</NavLinksTextView>
      </NavLinksButtonView>
    </NavLinksStaticGroupView>
  );
};

export default BlogLinks;
