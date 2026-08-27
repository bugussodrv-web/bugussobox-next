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

/* ============================================================
 * Content model (derived from bugussobox_data_filled.xlsm)
 * ============================================================ */

export type ContentBlock =
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "note"; text: string };

export type PageTemplate =
  | "article"
  | "shape"
  | "shapes-index"
  | "products"
  | "product"
  | "faq"
  | "contact"
  | "gallery";

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface PageData {
  /** internal id, e.g. "p04" */
  id: string;
  /** route path without leading slash, e.g. "กล่องจั่วปัง/วัสดุหุ้ม" */
  slug: string;
  /** page <h1> / <title> */
  title: string;
  /** short intro shown above content */
  lead?: string;
  blocks: ContentBlock[];
  /** local image paths under /images */
  images: string[];
  template: PageTemplate;
  partsLabel?: string;
  has3d?: boolean;
  metaDescription?: string;
}

export interface ProductLine {
  slug: string;
  title: string;
  subtitle: string;
  minOrder: string;
  bullets: string[];
  image?: string;
  href: string;
}

export interface FaqItem {
  q: string;
  a: string;
}