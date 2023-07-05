import { PageView } from "./page-views";

import { Blog } from "./main";
import Nav from "./nav";

import { BlogLinks } from "../client";

const BlogPage = () => {
  return (
    <PageView className="BlogPage">
      <Nav midSection={<BlogLinks />} />
      <Blog />
    </PageView>
  );
};

export default BlogPage;
