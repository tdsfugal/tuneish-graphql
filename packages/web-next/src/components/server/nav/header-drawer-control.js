import { HeaderButtonTextView } from "src/styles/server";

const HeaderDrawerControl = () => {
  const headerOpenVisual = (
    <HeaderButtonTextView className="HeaderButtonTextView">
      H-OPEN
    </HeaderButtonTextView>
  );
  const headerCloseVisual = (
    <HeaderButtonTextView className="HeaderButtonTextView">
      H-CLOSE
    </HeaderButtonTextView>
  );

  return (
    <HeaderDrawerControl
      className="HeaderDrawerControl"
      openVisual={headerOpenVisual}
      closeVisual={headerCloseVisual}
    />
  );
};

export default HeaderDrawerControl;
