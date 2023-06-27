import Link from "next/link";

import { LinkBannerView, LinkView } from "src/styles/server";

import LINKS from "meta/links.json";

const LinkBanner = ({ page }) => {
  console.log(page);
  console.log("Links = ", LINKS);

  const pageLinks = LINKS[page];

  return (
    <LinkBannerView className="LinkBannerView">
      {pageLinks.map(({ label, uri }) => (
        <Link href={uri}>
          <LinkView className="LinkView">{label}</LinkView>
        </Link>
      ))}
    </LinkBannerView>
  );
};

export default LinkBanner;
