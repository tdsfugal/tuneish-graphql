import { FooterControlView, FooterButtonTextView } from "src/styles/server";
import { FooterDrawerControl } from "src/components/client";

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
