import Link from "next/link";
import { navItems } from "@/data/navigation";

interface NavLinksProps {
  className?: string;
}

export default function NavLinks({ className = "" }: NavLinksProps) {
  return (
    <ul className={`nav-links ${className}`} id="nav">
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={item.isCTA ? "nav-cta" : ""}
          >
            {item.label}
          </Link>
          {item.children && (
            <ul className="dropdown">
              {item.children.map((child) => (
                <li key={child.href}>
                  <Link href={child.href}>{child.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}