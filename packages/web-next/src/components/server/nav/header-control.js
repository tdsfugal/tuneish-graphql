import { HeaderControlView, HeaderButtonTextView } from "src/styles/server";
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
