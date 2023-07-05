import { FooterDrawerControl } from "src/components/client";

import {
  FooterControlView,
  FooterButtonTextView,
} from "./footer-control-views";

const FooterControl = () => {
  const footerOpenVisual = (
    <FooterButtonTextView className="FooterButtonLabel">
      FOPEN
    </FooterButtonTextView>
  );
  const footerCloseVisual = (
    <FooterButtonTextView className="FooterButtonLabel">
      FCLOSE
    </FooterButtonTextView>
  );

  return (
    <FooterControlView className="FooterControl">
      <FooterDrawerControl
        openVisual={footerOpenVisual}
        closeVisual={footerCloseVisual}
      />
    </FooterControlView>
  );
};

export default FooterControl;
