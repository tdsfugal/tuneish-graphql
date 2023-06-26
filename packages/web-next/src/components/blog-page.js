import { PageView } from "src/styles/server";

import { Blog, Nav } from "./server";

const BlogPage = () => {
  return (
    <PageView>
      <Nav page={"Blog"} />
      <Blog />
    </PageView>
  );
};

export default BlogPage;
