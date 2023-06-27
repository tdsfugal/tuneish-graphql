import Link from "next/link";

import { BlogView, MainWrapper, BlogBackgroundView } from "/src/styles/server";
import LinkBanner from "../link-banner";

const Blog = () => {
  return (
    <MainWrapper className="MainWrapperView">
      <BlogBackgroundView className="BlogBackgroundView" />
      <BlogView className="BlogView">
        <LinkBanner page="blog" />
      </BlogView>
    </MainWrapper>
  );
};

export default Blog;
