import { PageView } from "src/styles/server";

import { Blog, Nav } from "./server";
import { BlogLinks } from "./client";

const BlogPage = () => {
  return (
    <PageView className="BlogPage">
      <Nav midSection={<BlogLinks />} />
      <Blog />
    </PageView>
  );
};

export default BlogPage;
