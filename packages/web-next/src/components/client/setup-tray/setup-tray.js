"use client";

import { SetupTrayView } from "./setup-tray-views";

const SetupTray = () => {
  const active = true;

  return (
    <SetupTrayView className="SetupTray" active={active}>
      foo
    </SetupTrayView>
  );
};

export default SetupTray;
