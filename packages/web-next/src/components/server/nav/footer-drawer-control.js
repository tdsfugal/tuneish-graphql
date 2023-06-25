import { FooterButtonTextView } from "src/styles/server";

const FooterDrawerControl = () => {
  const footerOpenVisual = (
    <FooterButtonTextView className="FooterButtonTextView">
      F-OPEN
    </FooterButtonTextView>
  );
  const footerCloseVisual = (
    <FooterButtonTextView className="FooterButtonTextView">
      F-CLOSE
    </FooterButtonTextView>
  );

  return (
    <FooterDrawerControl
      className="FooterDrawerControl"
      openVisual={footerOpenVisual}
      closeVisual={footerCloseVisual}
    />
  );
};

export default FooterDrawerControl;
