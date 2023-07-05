import { Footer, Header } from "../_marginals";

import { MainWrapper } from "../../page-views";

import { BlogView, BlogBackgroundView } from "./blog-views";

const Blog = () => {
  return (
    <MainWrapper className="MainWrapper">
      <BlogBackgroundView className="BlogBackground" />
      <Header page="blog" />
      <BlogView className="Blog"></BlogView>
      <Footer />
    </MainWrapper>
  );
};

export default Blog;
