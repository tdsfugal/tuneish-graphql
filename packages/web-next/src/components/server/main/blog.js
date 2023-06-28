import { BlogView, MainWrapper, BlogBackgroundView } from "/src/styles/server";

import Footer from "../footer";
import Header from "../header";

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
