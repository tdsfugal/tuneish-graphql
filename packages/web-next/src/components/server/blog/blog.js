import Link from "next/link";

import { BlogView, MainWrapper, BlogBackgroundView } from "/src/styles/server";

import { FooterDrawer, HeaderDrawer } from "src/components/client";
import LinkBanner from "../link-banner";

const Blog = () => {
  return (
    <MainWrapper className="MainWrapperView">
      <BlogBackgroundView className="BlogBackgroundView" />
      <HeaderDrawer>
        <LinkBanner page="blog" />
      </HeaderDrawer>
      <BlogView className="BlogView"></BlogView>
      <FooterDrawer />
    </MainWrapper>
  );
};

export default Blog;
