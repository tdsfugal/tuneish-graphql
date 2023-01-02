import React from "react";

import { Layout, Main, Circle } from "/src/components";

export default function HomePage() {
  return (
    <Layout>
      <Main>
        <h1>Welcome to Tuneish</h1>
        <Circle r={400} />
      </Main>
    </Layout>
  );
}
