import { FooterControlView, FooterButtonTextView } from "src/styles/server";
import { FooterDrawerControl } from "src/components/client";

const FooterControl = () => {
  const footerOpenVisual = (
    <FooterButtonTextView className="FooterButtonLabelView">
      FOPEN
    </FooterButtonTextView>
  );
  const footerCloseVisual = (
    <FooterButtonTextView className="FooterButtonLabelView">
      FCLOSE
    </FooterButtonTextView>
  );

  return (
    <FooterControlView className="FooterControlView">
      <FooterDrawerControl
        openVisual={footerOpenVisual}
        closeVisual={footerCloseVisual}
      />
    </FooterControlView>
  );
};

export default FooterControl;
