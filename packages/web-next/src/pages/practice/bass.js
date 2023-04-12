import React from "react";

import { Layout, Circle } from "/src/components";
import { ColumnView, ItemView } from "/src/styles";

export default function HomePage() {
  return (
    <Layout pagePath="/practice/bass">
      <ColumnView>
        <ItemView flex="1 1 auto">
          <Circle r={300} />
        </ItemView>
      </ColumnView>
    </Layout>
  );
}
