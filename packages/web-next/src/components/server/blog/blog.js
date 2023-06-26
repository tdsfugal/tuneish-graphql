import React from "react";
import Link from "next/link";

import { BlogView, MainWrapper, BlogBackgroundView } from "/src/styles/server";

const Blog = () => {
  return (
    <MainWrapper className="MainWrapperView">
      <BlogBackgroundView className="BlogBackgroundView" />
      <BlogView className="BlogView">
        <Link href="/">HOME</Link>
      </BlogView>
    </MainWrapper>
  );
};

export default Blog;
