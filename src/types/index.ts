export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  isCTA?: boolean;
}

export interface Shape {
  title: string;
  href: string;
  image: string;
}

export interface MaterialItem {
  label: string;
  href: string;
}

export interface MaterialTab {
  id: string;
  label: string;
  items: MaterialItem[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  lineId: string;
  lineUrl: string;
  url: string;
  description: string;
  ogImage: string;
  facebookPixelId: string;
}