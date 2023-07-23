import { HeaderDrawer } from "src/components/client";
import LinkBanner from "./link-banner";

const Header = ({ page }) => {
  return (
    <HeaderDrawer>
      <LinkBanner page={page} />
    </HeaderDrawer>
  );
};

export default Header;
