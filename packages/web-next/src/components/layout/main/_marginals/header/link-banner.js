import Link from "next/link";

import { LinkBannerView, LinkView } from "src/styles/server";

import LINKS from "meta/links.json";

const LinkBanner = ({ page }) => {
  const pageLinks = LINKS[page];

  return (
    <LinkBannerView className="LinkBanner">
      {pageLinks.map(({ label, uri }) => (
        <Link key={label} href={uri}>
          <LinkView className="LinkView">{label}</LinkView>
        </Link>
      ))}
    </LinkBannerView>
  );
};

export default LinkBanner;
