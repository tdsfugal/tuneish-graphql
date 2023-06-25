import { HeaderControlView, HeaderButtonTextView } from "src/styles/server";
import { HeaderDrawerControl } from "src/components/client";

const HeaderControl = () => {
  const headerOpenVisual = (
    <HeaderButtonTextView className="HeaderButtonLabelView">
      HOPEN
    </HeaderButtonTextView>
  );
  const headerCloseVisual = (
    <HeaderButtonTextView className="HeaderButtonLabelView">
      HCLOSE
    </HeaderButtonTextView>
  );

  return (
    <HeaderControlView className="HeaderControlView">
      <HeaderDrawerControl
        openVisual={headerOpenVisual}
        closeVisual={headerCloseVisual}
      />
    </HeaderControlView>
  );
};

export default HeaderControl;
