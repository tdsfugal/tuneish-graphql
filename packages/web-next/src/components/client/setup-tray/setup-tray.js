"use client";

import { SetupTrayView } from "src/styles/client";

const SetupTray = () => {
  const active = true;

  return (
    <SetupTrayView className="SetupTray" active={active}>
      foo
    </SetupTrayView>
  );
};

export default SetupTray;
