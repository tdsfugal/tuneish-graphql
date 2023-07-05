import {
  HeaderControlView,
  HeaderButtonTextView,
} from "./header-control-views";
import { HeaderDrawerControl } from "src/components/client";

const HeaderControl = () => {
  const headerOpenVisual = (
    <HeaderButtonTextView className="HeaderButtonLabel">
      HOPEN
    </HeaderButtonTextView>
  );
  const headerCloseVisual = (
    <HeaderButtonTextView className="HeaderButtonLabel">
      HCLOSE
    </HeaderButtonTextView>
  );

  return (
    <HeaderControlView className="HeaderControl">
      <HeaderDrawerControl
        openVisual={headerOpenVisual}
        closeVisual={headerCloseVisual}
      />
    </HeaderControlView>
  );
};

export default HeaderControl;
