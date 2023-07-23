"use client";

import { PageView } from "src/styles";

import { Blog } from "src/components/main";
import Nav from "src/components/nav";
import { BlogLinks } from "src/components/client";

const BlogPage = () => {
  return (
    <PageView className="BlogPage">
      <Nav midSection={<BlogLinks />} />
      <Blog />
    </PageView>
  );
};

export default BlogPage;
