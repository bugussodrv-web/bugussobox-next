import Link from "next/link";
import { siteConfig } from "@/data/site";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <Link className="brand" href="/">
          <img
            src="https://bugussobox.com/images/icon/sigma-bk.png"
            alt="BugussoBox logo"
          />
          <span>
            {siteConfig.name}
            <small>{siteConfig.tagline}</small>
          </span>
        </Link>

        <MobileMenu>
          <NavLinks />
        </MobileMenu>
      </div>
    </header>
  );
}