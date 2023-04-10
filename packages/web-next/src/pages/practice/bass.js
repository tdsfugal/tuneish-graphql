import React from "react";

import { Layout, Main, Circle } from "/src/components";
import { ColumnView, ItemView } from "/src/styles";

export default function HomePage() {
  return (
    <Layout>
      <Main>
        <ColumnView>
          <ItemView flex="1 1 auto">
            <Circle r={300} />
          </ItemView>
        </ColumnView>
      </Main>
    </Layout>
  );
}
