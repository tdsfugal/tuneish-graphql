import React from "react";
import { BlogView, MainWrapper } from "/src/styles/server";

import BlogBackground from "./blog-background";

const Blog = () => {
  return (
    <MainWrapper className="MainWrapperView">
      <BlogBackground />
      <BlogView className="BlogView"></BlogView>
    </MainWrapper>
  );
};

export default Blog;
